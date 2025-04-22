function solve(text, regex) {
    // const { text, regex } = input;
    const pattern = new RegExp(regex, 'g');
    const matchs = text.match(pattern);
    return matchs || [];
}

console.log(solve("cat, bat, rat, fat", "[a-z]at"))