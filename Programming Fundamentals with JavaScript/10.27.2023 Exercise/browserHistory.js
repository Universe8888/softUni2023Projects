function browserHistory(browserObj, actions) {
    actions.forEach(action => {
        let [actionType, siteName] = action.split(' ');
        
        if (action === "Clear History and Cache") {
            browserObj["Open Tabs"] = [];
            browserObj["Recently Closed"] = [];
            browserObj["Browser Logs"] = [];
            return;
        }

        if (actionType === "Open") {
            browserObj["Open Tabs"].push(siteName);
        } else if (actionType === "Close" && browserObj["Open Tabs"].includes(siteName)) {
            browserObj["Open Tabs"] = browserObj["Open Tabs"].filter(site => site !== siteName);
            browserObj["Recently Closed"].push(siteName);
        }
        
        browserObj["Browser Logs"].push(action);
    });
    
    console.log(browserObj["Browser Name"]);
    console.log(`Open Tabs: ${browserObj["Open Tabs"].join(', ')}`);
    console.log(`Recently Closed: ${browserObj["Recently Closed"].join(', ')}`);
    console.log(`Browser Logs: ${browserObj["Browser Logs"].join(', ')}`);
}

let browserObj = {
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
};

let actions = ["Close Facebook", "Open StackOverFlow", "Open Google"];
browserHistory(browserObj, actions);


// let browserObj2 = {
//     "Browser Name": "Mozilla Firefox",
//     "Open Tabs": ["YouTube"],
//     "Recently Closed": ["Gmail", "Dropbox"],
//     "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
// };

// let actions2 = ["Open Wikipedia", "Clear History and Cache", "Open Twitter"];
// browserHistory(browserObj2, actions2);