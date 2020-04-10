// Immediately Invoked Function Expression to limit access to our 
// variables and prevent 
((() => {

  console.log("Hello, world!");

  // Load the data from a json file
  d3.csv("/data/Girls aged 15-19 Marriage.csv", (data1) => {
    d3.csv("/data/Women aged 20-24 Child-Marriage.csv", (data2) => {
      d3.csv("/data/Women aged 20-24 Marriage.csv", (data3) => {
        // ensure data is loaded correctly
        console.log(data1);
        console.log(data2);
        console.log(data3);
      });
    });
  });

})());