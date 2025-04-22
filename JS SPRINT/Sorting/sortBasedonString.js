function solve(input) {
    const[words, order] = input;
    const orderMap = {};
    for(let i=0; i < order.length; i++) {
        orderMap[order[i]] = i;
    }
    return words.sort((a, b) => {
        // position of the a, b in align order
        const minLength = Math.min(a.length, b.length);
        // compare with each char
        for(let i=0; i < minLength; i++) {
            const indexA = orderMap[a[i]];
            const indexB = orderMap[b[i]];

            if(indexA !== indexB) {
                return indexA - indexB;
            }
        }
        return a.length - b.length;
    })
}

const words = ["word", "world", "row"];
const order = "worldabcefghijkmnpqstuvxyz"
console.log(solve(words, order))