const yargs = require("yargs");
const fs = require("fs");

yargs
  .scriptName("Hello World")
  .usage("$0 <cmd> [args]")
  .command(
    "hello [name]",
    "and Hello World!",
    (args) => {
      args.positional("name", {
        type: "string",
        default: "Steve",
        describe: "the name to say hello to",
      });
    },
    function (argv) {
      console.log("hello", argv.name, "and Hello World!");
    }
  )
  .help().argv;

yargs
  .scriptName("Add Movie")
  .usage("$0 <cmd> [args]")
  .command(
    "add [title]",
    "[actor]",
    (args) => {
      args.positional("title", {
        type: "integer",
        default: "Not Specified",
        describe: "Movie name",
      });
      args.positional("actor", {
        type: "string",
        default: "Not Specified",
        describe: "Actor name",
      });
    },
    function (argv) {
      let movies;
      try {
        movies = JSON.parse(fs.readFileSync("./storage.json"));
      } catch (error) {
        movies = [];
      }
      const movie = { title: argv.title, actor: argv.actor };
      movies.push(movie);
      const data = JSON.stringify(movies);
      fs.writeFileSync("./storage.json", data);
    }
  )
  .help().argv;
