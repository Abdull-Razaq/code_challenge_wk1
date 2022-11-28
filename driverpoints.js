const prompt = require('prompt-sync')();

let speedOfCar = prompt("Input the speed of car:");

//Calculate points if driver passes the speed limit of 70
let overSpeed = speedOfCar - 70;
return overSpeed; 

let driverPoints = overSpeed / 5;
return driverPoints;

if (driverPoints === 0) {
    console.log("Ok.");
} else {
    console.log("Points " + driverPoints);
}

if (driverPoints > 12 ) {
    console.log("License suspended.");
}
