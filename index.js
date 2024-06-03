#!/usr/bin/env node
import { Command } from "commander";
import * as file from "./utils/index.js";

const program = new Command();

program
    .name("Notezy")
    .description("A not so simple CLI tool that stores notes.")
    .version("1.0.0")
    .argument("[note]", "The note you want to store") // [note] is optional
    .action(handleNoteAction)
    .helpOption("-h, --help", "Display help for command")
    .option(
        "-s, --see",
        "Display the list of notes in storage",
        handleSeeOption
    );

function handleNoteAction(note) {
    if (note) {
        const result = handleIncomingNote(note);
        console.log(result);
        file.writeToFile(JSON.stringify(result), "./data/myData.txt");
    }
}

async function handleSeeOption() {
    const data = await file.readFromFile("./data/myData.txt");
    console.log(data);
}

function handleIncomingNote(note) {
    return {
        content: note,
        id: Date.now(),
    };
}

program.parse(process.argv);
