function sortStack(stack) {
    const mainStack = [];
    const tempStack = [];

    for(let val of stack) {
        mainStack.push(val);
    }

    while(mainStack.length > 0) {
        let temp = mainStack.pop();

        while(tempStack.length > 0 && tempStack[tempStack.length-1] > temp) {
            mainStack.push(tempStack.pop());
        }
        tempStack.push(temp);
    }

    while(tempStack.length > 0) {
        mainStack.push(tempStack.pop());
    }
    return mainStack;
}
  