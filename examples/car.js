var Car = function () {
    this.make = "Honda";
    this.model = "Civic";
};

Car.prototype.makeAndModel = function () {
    return this.make + " " + this.model;
};

var assert = require("assert");

describe("Car", function () {
    describe("constructor", function () {
        it("should default the car to be a Honda Civic", function () {
            var car = new Car();
            assert.equal(car.make, "Honda");
            assert.equal(car.model, "Civic");
        });
    });

    describe("makeAndModel", function () {
        it("should return a string containing the make and model", function () {
            var car = new Car();
            assert.equal(car.makeAndModel(), "Honda Civic");

            car.make = "Toyota";
            car.model = "Camry";
            assert.equal(car.makeAndModel(), "Toyota Camry");
        });

        it("should return 1", function () {
            var car = new Car();
            assert.equal(car.makeAndModel(), 1);
        });
    });
});
