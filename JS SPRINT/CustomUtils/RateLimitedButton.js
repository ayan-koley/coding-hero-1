function throttle(fn, delay) {
    //   let lastCall = 0;
    let lastCall = -Infinity;
      return function (value, time) {
        if (time - lastCall < delay) {
          return;
        }
        lastCall = time;
        return fn(value);
      };
    }

const throt = throttle((x) =>{ console.log(x)}, 300);
throt("A");
setTimeout(() => {
    throt("B");
}, 300)
setTimeout(() => {
    throt("C");
}, 620)
setTimeout(() => {
    throt("d");
}, 900)
