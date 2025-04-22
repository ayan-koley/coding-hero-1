// Your task is to implement this function
function createLoggers(n) {
    let funArr = [];
    for(let i=0; i < n; i++) {
        funArr.push(
            function() {
                let element = i;
                return element;
            }
        )
    }
    return funArr;
}
  createLoggers(3).map(fn => console.log(fn()));