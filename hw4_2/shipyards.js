const Ship = function (name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
}

const MotorShip = function (enginePower, caseMaterial) {
    this.enginePower = enginePower;
    this.caseMaterial = caseMaterial;
}
MotorShip.prototype = new Ship();

const SailingShip = function (masts, sailsArea) {
    this.masts = masts;
    this.sailsArea = sailsArea;
}
SailingShip.prototype = new Ship();


const Shipyard = function (type) {
    this.type = type;

    this.build = function (name, color) {
        const ship = new this.type();
        ship.name = name;
        ship.age = 0;
        ship.color = color;
        return ship;
    }

    this.repair = function (ship) {
        if (!(ship instanceof this.type)) {
            console.log('Данная верфь не занимается ремонтом кораблей такого типа.');
            return false;
        }
        ship.lastRepair = new Date();
        return true;
    }

    this.paint = function (ship, color) {
        ship.color = color;
    }

    this.change = function (ship) {
        if (!(ship instanceof this.type)) {
            console.log('Данная верфь не занимается обменом кораблей такого типа.');
            return false;
        }
        ship.age = 0;
        return true;
    }
}

const MotorShipyard = function () {
    this.build = function (name, color, enginePower, caseMaterial) {
        const ship = MotorShipyard.prototype.build(name, color);
        ship.enginePower = enginePower;
        ship.caseMaterial = caseMaterial;
        return ship;
    }
}
MotorShipyard.prototype = new Shipyard(MotorShip);

const SailingShipyard = function () {
    this.build = function (name, color, masts, sailsArea) {
        const ship = SailingShipyard.prototype.build(name, color);
        ship.masts = masts;
        ship.sailsArea = sailsArea;
        return ship;
    }
}
SailingShipyard.prototype = new Shipyard(SailingShip);


const motorShipyard = new MotorShipyard();
const motorShip = motorShipyard.build('Titanic', 'black', 55_000, 'titan');

const sailingShipyard = new SailingShipyard();
const sailingShip = sailingShipyard.build('Ever Given', 'green', 5, 75);

if (motorShipyard.repair(motorShip)) {
    console.log("Корабль " + motorShip.name + " успешно отремонтирован");
}
if (motorShipyard.repair(sailingShip)) {
    console.log("Корабль " + sailingShip.name + " успешно отремонтирован");
}

motorShipyard.paint(motorShip, 'white');
motorShipyard.paint(sailingShip, 'yellow');

motorShip.age = 10;
sailingShip.age = 20;

motorShipyard.change(motorShip);
motorShipyard.change(sailingShip);

console.log(motorShip);
console.log(sailingShip);
