async function solve(text, delay) {
  // const [text, delay] = input;
  const myPromise = new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(text);
    }, delay);
  });
  return myPromise;
}

async function fn(params) {
  console.log(await solve("Hello", 0));
}
fn();
