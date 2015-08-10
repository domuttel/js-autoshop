

// added car class and properties w/ constructors
var Car = function(make, model, year, state, color, current_owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.state = "off";
  this.color = color;
  this.previous_owner = [];
  this.current_owner = "manufacturer";
// add constructors for passengers
  this.passengers = [];
};

// added part one methods for Car class
Car.prototype.sale = function(newOwner) {
  this.previous_owner.push(this.current_owner);
  this.current_owner = newOwner;
};

Car.prototype.paint = function(color) {
  this.color = color;
};

Car.prototype.start = function() {
  this.state = "on";
};

Car.prototype.start = function() {
  this.state = "off";
};

Car.prototype.driveTo = function(destination) {
  if (this.state === "on") {
    console.log("Driving to " + destination);
  }
  else {
    console.log("Sorry, this car is off");
  }
};

Car.prototype.park = function() {
  if (this.state === "off") {
    console.log("Parked!");
  }
  else {
    console.log("Sorry, the car is still on.");
  }
};

// add part 2 - properties to constructor
Car.prototype.pickUp = function(name) {
  passengers.push(name);
  if(this.state === "on") {
  console.log("Driving to pick up " + name);
  }
};

Car.prototype.dropOff = function(name) {
  if(this.state === "on") {
  var index = passengers.indexOf(name);
  passengers.splice(index, 1);
  }
};