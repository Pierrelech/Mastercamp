/**
 * Represents a car.
 */
export class Car {
    /**
     * Constructs a new Car instance.
     * @param {string} make - The make of the car.
     * @param {string} model - The model of the car.
     * @param {number} year - The year the car was manufactured.
     */
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.speed = 0; // Initial speed is 0
    }
  
    /**
     * Accelerates the car by the specified amount.
     * @param {number} amount - The amount by which to increase the speed.
     */
    accelerate(amount) {
      this.speed += amount;
    }
  
    /**
     * Decelerates the car by the specified amount.
     * @param {number} amount - The amount by which to decrease the speed.
     */
    decelerate(amount) {
      this.speed -= amount;
    }
  
    /**
     * Retrieves the current speed of the car.
     * @returns {number} - The current speed of the car.
     */
    getSpeed() {
      return this.speed;
    }
  }
  
  // Example usage:
  const myCar = new Car("Toyota", "Camry", 2022);
  console.log(myCar); // Output: Car { make: 'Toyota', model: 'Camry', year: 2022, speed: 0 }
  
  myCar.accelerate(50);
  console.log(myCar.getSpeed()); // Output: 50
  
  myCar.decelerate(20);
  console.log(myCar.getSpeed()); // Output: 30