function isValidParentheses(s) {
    let stack = [];
    let opening_braces = ['(', '{', '['];

    for(let val of s) {
        if(opening_braces.includes(val)) {
            stack.push(val);
        }   else {
            if(stack.length == 0) return false;
            let pop = stack.pop();
            if((val === ')' && pop !== '(') || (val === '}' && pop !== '{') || 
                (val === ']' && pop !== '[')) {
                    return false;
                }
        }
    }
    return stack.length === 0;
}

console.log(isValidParentheses("()"))