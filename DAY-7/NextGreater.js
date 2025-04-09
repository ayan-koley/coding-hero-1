function nextGreaterElement(arr) {
    let n = arr.length;
    if(n < 2) {
        return [-1];
    }
    let stack = [];
    let result = new Array(n);
    for(let i=n-1; i >= 0; i--) {
        while(stack.length != 0 && stack[stack.length-1] <= arr[i]) {
            stack.pop();
        }
        if(stack.length == 0) {
            result[i] = -1
            stack.push(arr[i]);
        }   else {
            result[i] = stack[stack.length-1];
            stack.push(arr[i]);
        }
    }
    return result;
}

nextGreaterElement([5, 4, 3, 2, 1, 3])