function curry(fn, n) {
    return function curried(...args) {
      if (args.length >= n) {
        return fn(...args);
      } else {
        return function (...nextArgs) {
          return curried(...args, ...nextArgs);
        };
      }
    };
  }
  