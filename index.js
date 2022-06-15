// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
  if(someValue > 42){
    return someValue - 42;
  }else {
    return 42 - someValue;
  }
}

//distance from Hq

function distanceFromHqInFeet(someValue) {
 return distanceFromHqInBlocks(someValue) * 264;
  
}
  
//distance in  feet

 function distanceTravelledInFeet(start, destination) {
    if (start <  destination){
      return (destination - start) * 264;
    }else {
      return (start - destination) * 264;
    }
  }


  function calculatesFarePrice(start, destination) {

    let feetTravelled = distanceTravelledInFeet(start, destination)

    if (feetTravelled <= 400) {
      return 0;
    }else if (feetTravelled > 400 && feetTravelled <= 2000) {
      return (feetTravelled - 400) * 0.02;
    }else if (feetTravelled > 2000 && feetTravelled <= 2500) {
      return 25;
    }else if (feetTravelled > 2500) {
      return ('cannot travel that far')
    }

  }
