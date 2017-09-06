var SolarSystem = (function(oldSolarSystem){
	const stars = ["yellow", "dwarf", "comets"];

	oldSolarSystem.getStars = function(){
		return stars;
	};

	oldSolarSystem.zapStars =function(){
		star.pop();
	};

return oldSolarSystem;

}) (SolarSystem || {});