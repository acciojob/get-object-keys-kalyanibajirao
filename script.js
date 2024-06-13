//your JS code here. If required.
function Student(name) {
    this.name = name;
}

// Add a method to the Object prototype
Object.prototype.getKeys = function() {
    return Object.keys(this);
};