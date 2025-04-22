// Your task is to implement this function
function createGreeters(names) {
    const funArr = [];
    for(const name of names) {
        funArr.push(
            function() {
                return `Hello, ${name}!`;
            }
        )
    }
    return funArr;
}

