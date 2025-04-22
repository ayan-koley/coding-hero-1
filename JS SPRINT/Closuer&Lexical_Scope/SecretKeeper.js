// Your task is to implement this function
function secretKeeper(secret) {
    this.secret = secret;
    this.isGranted = false;
}
secretKeeper.prototype.unlock = function() {
    this.isGranted = true;
}
secretKeeper.prototype.getSecret = function() {
    if(this.isGranted) {
        return this.secret;
    }   
    return "Access Denied";
}