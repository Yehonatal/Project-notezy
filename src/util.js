export const listNotes = (notes) => {
    console.log("ID\t\tContent\t\t\tTags");

    notes.forEach(({ id, content, tags }) => {
        console.log(`${id}\t${content}\t${tags.join(", ")}`);
    });
};
