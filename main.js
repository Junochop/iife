//invoke

// console.log("hello");
// function moreCrap () {
//   console.log("hi");

// }
// let Something = (function(oldSomething){
//   const animals = ["cat", "dog"];
//   oldSomething.niceFunction = function() {
//   	console.log('im a function');
//   }

//   return oldSomething;

// })(Something || {});



SolarSystem.setPlanet("planet x");

let myPlanets = SolarSystem.getPlanets();
console.log("myPlanet", myPlanets)


let mySpacecraft = SolarSystem.getSpacecraft();

console.log("mySpacecraft", mySpacecraft);