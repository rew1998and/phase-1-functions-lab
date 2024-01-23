const distanceFromHqInBlocks= function(block) {
    //returns the number of blocks given a value
    const hq = 42;
    return Math.abs(block - hq);
  }
console.log(distanceFromHqInBlocks(43));

function distanceFromHqInFeet(block) {
    const blocks = distanceFromHqInBlocks(block);
    const feetPerBlock = 264; // Assuming each block is 264 feet
    return blocks * feetPerBlock;
  }
 
  const distanceTravelledInFeet = function(start, destination) {
    const feetPerBlock = 264;
    const startDistance = distanceFromHqInBlocks(start);
    const destinationDistance = distanceFromHqInBlocks(destination);
    const totalBlocks = Math.abs(destinationDistance - startDistance);
    return totalBlocks * feetPerBlock;
  };
  
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return 2.56;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return "cannot travel that far";
    }
  }
    


    //returns the fare for the customer
  
