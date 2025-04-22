function solve(input) {
    return arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
}
const arr = ["Banana", "apple", "Cherry"];
console.log(solve(arr));