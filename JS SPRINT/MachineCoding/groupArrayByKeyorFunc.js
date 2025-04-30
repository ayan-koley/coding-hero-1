function groupBy(arr, keyOrFn) {
  const result = {};
  let key;
  for (let val of arr) {
    if (typeof keyOrFn === "function") {
      key = keyOrFn(val);
      if (result[key]) {
        let data = result[key];
        data.push(val);
        result[key] = data;
      } else {
        result[key] = [val];
      }
    } else {
      key = val[keyOrFn];
      if (key === val[keyOrFn] && result[key]) {
        let data = result[key];
        data.push(val);
        result[key] = data;
      } else {
        result[key] = [val];
      }
    }
  }
  return result;
}
