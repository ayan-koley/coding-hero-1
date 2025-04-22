function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
}
Product.prototype.applyDiscount = function(percent) {
    const percentFigure = percent / 100;
    const discount = this.price * percentFigure;
    this.price = Math.round(this.price - discount);
}
Product.prototype.purchase = function(quentity) {
    if(this.stock === 0) {
        return "Not enough stock";
    }
    const availableStock = this.stock - quentity;
    if( availableStock >= 0) {
        this.stock = this.stock - quentity;
        return availableStock;
    }   else {
        return "Not enough stock"
    }
}

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { product, action } = JSON.parse(input);
  const storeItem = new Product(product.name, product.price, product.stock);

  if (action.type === "discount") {
    storeItem.applyDiscount(action.percent);
  } else if (action.type === "purchase") {
    process.stdout.write(JSON.stringify(storeItem.purchase(action.quantity)));
    return;
  }

  process.stdout.write(JSON.stringify([storeItem.price, storeItem.stock]));
});
