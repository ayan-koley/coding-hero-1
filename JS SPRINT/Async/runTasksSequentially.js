async function solve(input) {
  let result = [];
  for (let val of input) {
    let resolve = await val();
    result.push(resolve);
  }
  return result;
}

async function fn() {
  console.log(
    await solve([() => new Promise(r => r("A")), () => Promise.resolve("B")])
  );
}
fn();
