import { insertDB, getDB, saveDB } from "./db.js";

export const newNote = async (note, tags) => {
    const newNoteFlash = {
        id: Date.now(),
        content: note,
        tags,
    };

    await insertDB(newNoteFlash);
    return newNoteFlash;
};

export const getAllNotes = async () => {
    const { notes } = await getDB();
    return notes;
};

export const findNotes = async (filter) => {
    const { notes } = await getDB();
    return notes.filter((note) =>
        note.content.toLowerCase().includes(filter.toLowerCase())
    );
};

export const removeNote = async (id) => {
    const { notes } = await getDB();
    const match = notes.find((note) => note.id === id);

    if (match) {
        const newNotes = notes.filter((note) => note.id != id);
        await saveDB({ notes: newNotes });
        return id;
    }
};

export const removeAllNotes = () => saveDB({ notes: [] });
