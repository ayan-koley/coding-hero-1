// You need to implement the BankAccount constructor function and its prototype methods

function BankAccount(accountNumber, holderName, balance) {
    // Initialize accountNumber, holderName, and balance properties
    this.accounts = accountNumber;
    this.holderName = holderName;
    this.balance = balance;
}
BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
}
BankAccount.prototype.withdraw = function(amount) {
    if(this.balance >= amount) {
        this.balance -= amount;
    }
}
BankAccount.prototype.transfer = function(amount, accountDetails) {
    if(this.balance >= amount) {
        this.balance -= amount;
        accountDetails.balance += amount;
        return;
    }
    return;
} 
