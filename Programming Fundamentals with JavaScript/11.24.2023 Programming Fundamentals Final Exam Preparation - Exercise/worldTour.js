function worldTour(commands) {
  let stops = commands.shift();

  for (let command of commands) {
    if (command === "Travel") {
      break;
    }

    let [action, ...params] = command.split(":");
    let index, string;

    switch (action) {
      case "Add Stop":
        [index, string] = params;
        index = Number(index);

        if (index >= 0 && index < stops.length) {
          stops = stops.slice(0, index) + string + stops.slice(index);
        }
        break;

      case "Remove Stop":
        let [startIndex, endIndex] = params;
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);

        if (startIndex >= 0 && startIndex < stops.length && endIndex >= 0 && endIndex < stops.length) {
          stops = stops.slice(0, startIndex) + stops.slice(endIndex + 1);
        }
        break;

      case "Switch":
        let [oldString, newString] = params;

        if (stops.includes(oldString)) {
          stops = stops.split(oldString).join(newString);
        }
        break;
    }

    console.log(stops);
  }

  console.log(`Ready for world tour! Planned stops: ${stops}`);
}

worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]);