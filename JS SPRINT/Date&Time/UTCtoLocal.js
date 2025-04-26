function solve(input) {
    const utcDate = new Date(input); 
    // 5hrs 30min = 5 * 60 + 30 = 330
    utcDate.setMinutes(utcDate.getMinutes() + 330);

    const localYear = utcDate.getFullYear();

    const localMonth = String(utcDate.getMonth() + 1).padStart(2, '0');

    const localDay = String(utcDate.getDate()).padStart(2, '0');

    const localHours = String(utcDate.getHours()).padStart(2, '0');

    const localMinutes = String(utcDate.getMinutes()).padStart(2, '0');
  
    return `${localYear}-${localMonth}-${localDay} ${localHours}:${localMinutes}`;
}

  console.log(solve("2025-04-10T12:00:00Z"));
  