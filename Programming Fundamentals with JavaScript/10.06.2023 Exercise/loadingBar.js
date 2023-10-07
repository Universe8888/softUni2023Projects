function loadingBar(percent) {

    let loaded = percent / 10;
    let remaining = 10 - loaded;

    let loadedStr = '%'.repeat(loaded);
    let remainingStr = '.'.repeat(remaining);

    if (percent === 100) {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    } else {
        console.log(`${percent}% [${loadedStr}${remainingStr}]`);
        console.log("Still loading...");
    }
}

loadingBar(30);