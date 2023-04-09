function worldSwimmingRecord(input) {

    // convert input array to three separate variables
    let recordInSecounds = Number(input[0]); // World Record time in seconds
    let spaceInMeters = Number(input[1]); // Distance in meters Ivan has to swim
    let timeInSecoundsForSwimmingOneMeter = Number(input[2]); // Time in seconds for which Ivan swims a distance of 1 m
  
    // calculate Ivan's time
    let ivanchoTime = spaceInMeters * timeInSecoundsForSwimmingOneMeter;
  
    // take into account the drag of the water
    let slowedDown = Math.floor(spaceInMeters / 15) * 12.5; // number of times Ivan is slowed down by the drag of the water
    ivanchoTime += slowedDown; // add the time slowed down to Ivan's time
  
    // determine if Ivan beat the World Record
    if (ivanchoTime < recordInSecounds) { // Ivan's time is less than the World Record
      console.log(`Yes, he succeeded! The new world record is ${ivanchoTime.toFixed(2)} seconds.`); // print message with new World Record time
    } else { // Ivan's time is greater than or equal to the World Record
      let underAchievingSeconds = (ivanchoTime - recordInSecounds).toFixed(2); // calculate how many seconds slower Ivan was than the World Record
      console.log(`No, he failed! He was ${underAchievingSeconds} seconds slower.`); // print message with how many seconds Ivan was slower
    }
  }
  
  worldSwimmingRecord(["10464", "1500", "20"]); // example input
  
  // expected output: "No, he failed! He was 20786.00 seconds slower."
  