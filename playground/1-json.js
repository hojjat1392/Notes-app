const fs = require("fs");
const chalk = require("chalk");

// const json = require('./1-json.json');

const dataBuffer = fs.readFileSync("./playground/1-json.json");
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);

data.name = "hojjat";
data.age = 30;

const dataToJson = JSON.stringify(data);

try {
  fs.writeFileSync("./playground/1-json.json", dataToJson);
  console.log(chalk.green("Task completed!"));
} catch (error) {
  console.log(chalk.red("Some thing is wrong!"));
}
