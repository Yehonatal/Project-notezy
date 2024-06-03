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
    .version()
    .option("s", {
        alias: "see",
        describe: "Display the list of notes in storage",
        type: "boolean",
    })
    .option("tags", {
        alias: "t",
        type: "string",
        description: "tags to add to the note for search",
    })
    .help("h")
    .alias("h", "help")
    .parse();

async function main() {
    if (argv.note) {
        const result = handleIncomingNote(argv.note, argv.tags);
        console.log(result);
        await file.writeToFile(JSON.stringify(result), "./data/myData.txt");
    } else if (argv.see) {
        const data = await file.readFromFile("./data/myData.txt");
        console.log(data);
    } else {
        console.log("No command specified. Use --help for usage information.");
    }
}

function handleIncomingNote(note, tagsInputs) {
    const tags = tagsInputs
        ? tagsInputs.split(",").map((tag) => tag.trim())
        : [];
    return {
        content: note,
        id: Date.now(),
        tags: tags,
    };
}

main().catch((error) => {
    console.error("An error occurred:", error);
    process.exit(1);
});
