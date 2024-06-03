import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import {
    newNote,
    getAllNotes,
    findNotes,
    removeNote,
    removeAllNotes,
} from "./notes.js";
import { listNotes } from "./util.js";

yargs(hideBin(process.argv))
    .scriptName("notezy")
    .usage(
        "$0 new <note>",
        "A not so simple CLI tool that stores notes.",
        (yargs) => {
            yargs.positional("note", {
                describe: "The note you want to store",
                type: "string",
            });
        },
        async (argv) => {
            const tags = argv.tags
                ? argv.tags.split(",").map((tag) => tag.trim())
                : [];
            const note = await newNote(argv.note, tags);
            console.log("Note added!", note.id);
        }
    )
    .version()
    .option("tags", {
        alias: "t",
        type: "string",
        description: "tags to add to the note for search",
    })
    .command(
        "all",
        "get all notes",
        () => {},
        async (argv) => {
            const notes = await getAllNotes();
            listNotes(notes);
        }
    )
    .command(
        "find <filter>",
        "get matching notes",
        (yargs) => {
            return yargs.positional("filter", {
                describe:
                    "The search term to filter notes by, will be applied to note.content",
                type: "string",
            });
        },
        async (argv) => {
            const notes = await findNotes(argv.filter);
            listNotes(notes);
        }
    )
    .command(
        "remove <id>",
        "remove a note by id",
        (yargs) => {
            return yargs.positional("id", {
                type: "number",
                description: "The id of the note you want to remove",
            });
        },
        async (argv) => {
            const id = await removeNote(argv.id);
            if (id) {
                console.log("Note removed: ", id);
            } else {
                console.log("Note not found");
            }
        }
    )
    .command(
        "web [port]",
        "launch website to see notes",
        (yargs) => {
            return yargs.positional("port", {
                describe: "port to bind on",
                default: 5000,
                type: "number",
            });
        },
        async (argv) => {
            const notes = await getAllNotes();
            start(notes, argv.port);
        }
    )
    .command(
        "clean",
        "remove all notes",
        () => {},
        async (argv) => {
            await removeAllNotes();
            console.log("All notes removed");
        }
    )
    .help("h")
    .alias("h", "help")
    .parse();
