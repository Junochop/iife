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


var SolarSystem = (function(oldSolarSystem){
  const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "pluto"];
  const spacecraft = ["voyager", "gemini", "space shuttle"];
 
  oldSolarSystem.getPlanets = function(){
  	return planets
  };

  oldSolarSystem.setPlanet = function(newPlanet){
    planets.push(newPlanet);
  };


  oldSolarSystem.getSpacecraft = function(){
  return spacecraft;
  };

  oldSolarSystem.setSpacraft = function(newCraft){
  	craft.push(newCraft);
  };


  return oldSolarSystem;
})(SolarSystem || {});

let myPlanets = SolarSystem.getPlanets();
console.log("myPlanet", myPlanets)