const fs = require('fs').promises;

async function readFromAFile() {
    try {
        const data = await fs.readFile("./a.txt", "utf-8");
        console.log(data);
    } catch (error) {
        console.error("Error reading file:", error);
    }
}

readFromAFile();
