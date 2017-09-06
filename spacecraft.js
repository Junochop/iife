var SolarSystem = (function(oldSolarSystem){

  const spacecraft = ["voyager", "gemini", "space shuttle"];
 

  oldSolarSystem.getSpacecraft = function(){
  return spacecraft;
  };

  oldSolarSystem.setSpacraft = function(newCraft){
  	craft.push(newCraft);
  };


  return oldSolarSystem;
})(SolarSystem || {});