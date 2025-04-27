async function solve(taskFn, maxAttempts) {
    // const [taskFn, maxAttempts] = input;
  
    async function retry(fn, attempts) {
        if(attempts === 0) {
            return `Failed after ${maxAttempts} attempts`;
        }
        const promise = fn();
        return promise.then((val) => val).catch(() => retry(fn, attempts-1));
    }
  
    return await retry(taskFn, maxAttempts);
  }

  async function fn() {
    console.log(await solve(() => Promise.resolve("Success"), 3));
  }
  fn()