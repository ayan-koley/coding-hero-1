function solve(input) { 
    let result = {};

    for(const {product, price} of input) {
        if(result[product]) {
            let sum = result[product] + price;
            result[product] = sum;
        }   else {
            result[product] = price;
        }
    }
    return result;
}
console.log(solve([{"product":"Apple","price":2},{"product":"Banana","price":1},{"product":"Apple","price":3}]));