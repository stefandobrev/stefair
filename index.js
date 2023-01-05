// console.log("Hello world"); 
const firstName = "Stefan";
let lastName = "Dobrev";
var middleName = "T";

// console.log(`${firstName} ${middleName} ${lastName}`);
// console.log(firstName + " " + middleName + " " + lastName);

const text = "Nqkakav text";
const number = 34534.4;
const number1 = 34534;

const proverka = true; // false

const imena = ["Manol", "Petar", "Joni"];

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

// for (let user in imena){
//     console.log(imena[user]);
//}

const poletDoAustria = {
    id: 5,
    departure: "Sofia",
    arrival: "Vienna",
    passangers: 100
}

function getFlightId(polet){
    return polet.id;
}

const flightId = getFlightId(poletDoAustria);

console.log(flightId);