function eventLogger(events, delay, options) {
  const { leading, trailing } = options; 
  const result = []; // Array to store logged events
  let timer = null; // Placeholder for timer (not used here but kept for clarity)
  let lastEvent = null; // Store the last event for trailing logic
  let lastTime = 0; // Track time of last debounce window start
  let isWaiting = false; // Flag to check if we're inside a debounce window

  for (let i = 0; i < events.length; i++) {
    const currentTime = i; // Simulate current time as the index
    const event = events[i]; // Get the current event

    // Start of new debounce window if not waiting or time passed exceeds delay
    if (!isWaiting || currentTime - lastTime >= delay) {
      if (leading) {
        result.push(event); // Log event immediately if leading is true
      }
      isWaiting = true; // Set waiting flag as we're now in debounce window
    }

    if (trailing) {
      lastEvent = event; // Keep track of the last event in the current window
    }

    lastTime = currentTime; // Update the lastTime for this debounce window

    const nextTime = i + 1 < events.length ? i + 1 : currentTime + delay;
    // Get the simulated time of the next event, or dummy time if end

    // If gap to next event exceeds delay, we’re at the end of a burst
    if (nextTime - currentTime >= delay) {
      // If trailing is true and lastEvent wasn’t already logged by leading
      if (
        trailing &&
        lastEvent &&
        (!leading || lastEvent !== result[result.length - 1])
      ) {
        result.push(lastEvent); // Log the trailing event
      }
      isWaiting = false; // Reset waiting flag for next burst
      lastEvent = null; // Clear lastEvent after logging
    }
  }

  return result; 
}
