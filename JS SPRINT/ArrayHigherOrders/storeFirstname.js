function solve(input) {
    const result = [];
    for(const str of input) {
        const firstname = str.match(/^[^ ]+/)?.[0].toLowerCase();
        result.push(firstname);
    }
    return result;
}

  console.log(solve(["Alice human", "Human Nature"]));