function solve(input) {
    const { text, pattern } = input;
    
    const regexStr = "^" + pattern
        .replace(/([.+^${}()|[\]\\])/g, "\\$1")
        .replace(/\*/g, ".*")
        .replace(/\?/g, ".") + "$";
    
    const regex = new RegExp(regexStr);
    
    return regex.test(text);
}
