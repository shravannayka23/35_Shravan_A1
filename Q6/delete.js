const fs = require("fs");
const util = require("util");

const unlinkAsync = util.promisify(fs.unlink);

async function deleteFile() {
    try {
        await unlinkAsync("sample.txt");

        console.log("File deleted successfully.");
    } catch (error) {
        console.log("Error:", error.message);
    }
}

deleteFile();