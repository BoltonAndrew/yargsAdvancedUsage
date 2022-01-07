const yargs = require("yargs");

const app = () => {
  if (yargs.argv.helloWorld) {
    console.log(`Hello ${yargs.argv.name}, and Hello World!`);
  }
};

app();
