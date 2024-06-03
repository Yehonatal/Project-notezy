import fs from "fs";

export async function writeToFile(txt, path) {
    try {
        await fs.promises.mkdir("./notezy/data", { recursive: true });
        await fs.promises.appendFile(path, txt + "\n");
        console.log("File written successfully!");
    } catch (error) {
        console.error("Error writing file:", error);
    }
}
