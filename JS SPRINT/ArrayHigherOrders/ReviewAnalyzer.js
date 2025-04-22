function solve(input) {
    const arr = [];
    for(const val of input) {
        const obj = {
            product: val.product,
            averageRating: (val.ratings.quality + val.ratings.delivery + val.ratings.packaging) / 3
        }
        arr.push(obj);
    }
    if(arr.length > 0) {
        arr.sort((a, b) => b.averageRating - a.averageRating);
    }
    return arr;
}