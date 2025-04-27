async function solve(input) {
  return new Promise((resolve, reject) => {
    let result = [];
    let completed = 0;

    input.forEach((promise) => {
      Promise.resolve(promise())
        .then((val) => {
          result.push(val);
          completed++;
          if (input.length === completed) {
            resolve(result);
          }
        })
        .catch(reject);
    });
    if (input.length === 0) {
      resolve([]);
    }
  });
}

async function fn() {
  console.log(
    await solve([
      () => new Promise((r) => setTimeout(() => r("a"), 2000)),
      () => Promise.resolve("B"),
    ])
  );
}
fn();
