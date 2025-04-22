function Robot(name, batteryLevel) {
    // Initialize name and batteryLevel properties
    this.name = name;
    this.batteryLevel = batteryLevel;
}
Robot.prototype.charge = function() {
    if((this.batteryLevel + 20) <= 100) {
        this.batteryLevel += 20;
    }   else {
        this.batteryLevel = 100;
    }
}