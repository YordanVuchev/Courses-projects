'use strict';
//Challenge 1
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`New speed: ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`New speed: ${this.speed}`);
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// car1.accelerate();
// car1.accelerate();
// car1.brake();

// car2.accelerate();
// car2.accelerate();
// car2.brake();

//Challenge 2

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   get speedUs() {
//     return this.speed / 1.6;
//   }

//   set speedUs(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const car1 = new Car('Ford', 120);
// console.log(car1.speed);
// car1.speedUs = 50;
// console.log(car1.speed);

//Challenge 3
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`New speed: ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`New speed: ${this.speed}`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, spe ed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);
// //EV.prototype.constructor = EV;

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`
//   );
// };

// const car1 = new EV('Tesla', 120, 23);

// car1.chargeBattery(50);
// car1.accelerate();

//Challenge 4

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
  }

  brake() {
    this.speed -= 5;
    console.log(`Your speed is: ${this.speed}`);
  }

  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCL extends Car {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );

    return this;
  }

  chargeBattery(chargeTo = 100) {
    this.#charge = chargeTo;
    return this;
  }
}

const ELCar = new EVCL('Rivian', 120, 23);

ELCar.accelerate()
  .accelerate()
  .chargeBattery(30)
  .chargeBattery(40)
  .chargeBattery(50)
  .accelerate();

ELCar.brake();
