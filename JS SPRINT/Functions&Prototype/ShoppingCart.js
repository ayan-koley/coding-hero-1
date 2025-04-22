// You need to implement the ShoppingCart constructor function and its prototype methods

function ShoppingCart() {
  // Initialize items property
  this.cart = [];
}

// Define addItem method on ShoppingCart's prototype
ShoppingCart.prototype.addItem = function(price) {
    this.cart.push(price);
}
// Define getTotalPrice method on ShoppingCart's prototype
ShoppingCart.prototype.getTotalPrice = function() {
    let sum = 0;
    for(let price of this.cart) {
        sum += price;
    }
    return sum;
}
