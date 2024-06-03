import yargs from "yargs";
import * as file from "./utils/index.js";

const argv = yargs(process.argv.slice(2))
    .scriptName("notezy")
    .usage(
        "$0 [note]",
        "A not so simple CLI tool that stores notes.",
        (yargs) => {
            yargs.positional("note", {
                describe: "The note you want to store",
                type: "string",
            });
        }
    )
    .version("1.0.0")
    .option("s", {
        alias: "see",
        describe: "Display the list of notes in storage",
        type: "boolean",
    })
    .option("v", {
        alias: "version",
        describe: "Current version of notezy",
    })
    .help("h")
    .alias("h", "help")
    .parse();

async function main() {
    if (argv.note) {
        const result = handleIncomingNote(argv.note);
        console.log(result);
        await file.writeToFile(JSON.stringify(result), "./data/myData.txt");
    } else if (argv.see) {
        const data = await file.readFromFile("./data/myData.txt");
        console.log(data);
    } else {
        console.log("No command specified. Use --help for usage information.");
    }
}

function handleIncomingNote(note) {
    return {
        content: note,
        id: Date.now(),
    };
}

main().catch((error) => {
    console.error("An error occurred:", error);
    process.exit(1); // Exit with non-zero status code to indicate failure
});
