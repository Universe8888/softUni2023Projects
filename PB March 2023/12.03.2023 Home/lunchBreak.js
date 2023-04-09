function lunchBreak(input) {
    let serialName = input[0];
    let lengthOfEpisode = Number(input[1]);
    let timeOfBreak = Number(input[2]);

    let lunchTime = timeOfBreak / 8;
    let recreationTime = timeOfBreak / 4;
    let availableTime = timeOfBreak - lunchTime - recreationTime;
    let numEpisodes = Math.floor(availableTime / lengthOfEpisode);

    if (numEpisodes > 0) {
        let remainingTime = Math.ceil(availableTime - (numEpisodes * lengthOfEpisode));
        console.log(`You have enough time to watch ${serialName} and left with ${remainingTime} minutes free time.`);
    } else {
        let remainingTime = Math.ceil(lengthOfEpisode - availableTime);
        console.log(`You don't have enough time to watch ${serialName}, you need ${remainingTime} more minutes.`);
    }
}

lunchBreak(["Teen Wolf", "48", "620"]);
