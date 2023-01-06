// previously
// const animalFunk = require("./animalFunk"); this required us to call getAnimalName like this: animalFunk.getAnimalName
const { getAnimalName } = require("./animalFunk");
// previously
// const lama = require("./lama"); this required us to call lama like this: lama.lama
const { lama } = require("./lama");

console.log(getAnimalName(lama));
