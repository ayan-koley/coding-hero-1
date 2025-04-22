function solve(paragraph = "", keyword) {
    let cnt = 0;
    const words = paragraph.split(/\W+/);
    for (let word of words) {
        if (word.toLowerCase() === keyword.toLowerCase()) {
            cnt++;
        }
    }
    return cnt;
}
console.log(solve("HI hi hi!", "hi"));