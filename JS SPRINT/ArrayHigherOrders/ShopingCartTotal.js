function solve(input) {
    let total = 0;
    for(const item of input) {
        total += item.price * item.quantity;
    }
    return total;
}
