function findUniqueNumber(nums) {
    let res = 0;
    for(val of nums) {
      res ^= val;
    }
    return res;
}