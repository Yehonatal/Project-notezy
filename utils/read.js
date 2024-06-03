import fs from "fs";

export async function readFromFile(path) {
    try {
        const data = await fs.promises.readFile(path, "utf8");
        console.log("File read successfully!");
        return data;
    } catch (error) {
        console.error("Error reading file:", error);
        return null;
    }
}
