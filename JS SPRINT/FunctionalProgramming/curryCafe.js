function curryOrder(drink) {
    function sizeofDrink(size) {
        function nameOfDrint(name) {
            return `Order placed: ${drink}-${size} for ${name}`
        }
        return nameOfDrint;
    }
    return sizeofDrink;
}

let cuff = curryOrder("Tea")("Large")("Ayan");
console.log(cuff);