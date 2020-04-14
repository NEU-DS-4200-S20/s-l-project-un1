// Immediately Invoked Function Expression to limit access to our 
// variables and prevent 
((() => {

  console.log("Hello, world!");

  // Load the data from a json file
  d3.csv("/data/Women aged 20-24 Child-Marriage.csv", (data) => {

    // ensure data is loaded correctly
    console.log(data);
    console.log(data[1]["Married before Age 18"]);

    // General event type for selections, used by d3-dispatch
    // https://github.com/d3/d3-dispatch
    const dispatchString = "selectionUpdated";

    // create a scatterplot
    let spMarriageBirth = scatterplot()
      .x(data => data["Married before Age 18"])
      .xLabel("Married before Age 18")
      .y(data => data["Gave birth Before Age 18"])
      .yLabel("Gave birth Before Age 18")
      .selectionDispatcher(d3.dispatchString)
      ("#scatterplot", data);
        

      // add brusing and linking here
  });

})());