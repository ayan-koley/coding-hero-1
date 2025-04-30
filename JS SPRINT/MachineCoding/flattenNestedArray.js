function flatten(arr) {
  let result = [];
  if (!Array.isArray(arr)) {
    return [arr];
  }
  for (let val of arr) {
    if (Array.isArray(val)) {
      result = result.concat(flatten(val));
    } else {
      result.push(val);
    }
  }
  return result;
}
