const miniLodash = {
  chunk(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  },

  groupBy(array, keyOrFn) {
    let getkey;
    if (typeof keyOrFn === "string" && keyOrFn.trim().startsWith("(")) {
      getkey = eval(keyOrFn);
    } else if (typeof keyOrFn === "string") {
      getkey = (item) => item[keyOrFn];
    } else {
      getkey = keyOrFn;
    }

    return array.reduce((acc, item) => {
      const key = getkey(item);
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {});
  },

  uniqBy(array, keyOrFn) {
    let getkey;
    if (typeof keyOrFn === "string" && keyOrFn.trim().startsWith("(")) {
      getkey = eval(keyOrFn);
    } else if (typeof keyOrFn === "string") {
      getkey = (item) => item[keyOrFn];
    } else {
      getkey = keyOrFn;
    }

    const seen = new Set();
    const result = [];

    for (const item of array) {
      const key = getkey(item);
      if (!seen.has(key)) {
        seen.add(key);
        result.push(item);
      }
    }
    return result;
  },
};

