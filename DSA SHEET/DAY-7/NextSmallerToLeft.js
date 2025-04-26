function previousSmallerElement(arr) {
    let stack = [-1];
    let result = [];
    for (let val of arr) {
        while (stack.length > 0 && stack[stack.length - 1] > val) {
            stack.pop();
        }
        result.push(stack[stack.length-1]);
        stack.push(val);
    }
    console.log(result);
    return result;
}
previousSmallerElement([4, 5, 2, 10, 8]);

