var SolarSystem = (function(oldSolarSystem){
  const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "pluto"];
 
 
  oldSolarSystem.getPlanets = function(){
  	return planets
  };

  oldSolarSystem.setPlanet = function(newPlanet){
    planets.push(newPlanet);
  };




  return oldSolarSystem;
})(SolarSystem || {});