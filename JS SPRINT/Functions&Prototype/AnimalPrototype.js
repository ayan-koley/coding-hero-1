// You need to implement the Animal constructor function and its prototype method

function Animal(name) {
    // Initialize name property
    this.name = name;
}

// Define makeSound method on Animal's prototype
Animal.prototype.makeSound = function() {
    return "Some generic sound";
}
