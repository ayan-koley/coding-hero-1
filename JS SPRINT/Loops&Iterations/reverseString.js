function solve(input) {
    let str = "";
    for(let i=input.length-1; i >= 0; i--) {
        str += input.charAt(i);
    }
    return str;
}
console.log(solve("hello"))