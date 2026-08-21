const fs = require("fs");
const unzipper = require("unzipper");

async function extractZip() {
    try {
        console.log("Starting ZIP extraction...");

        await fs.createReadStream("sample.zip")
            .pipe(unzipper.Extract({ path: "extracted" }))
            .promise();

        console.log("ZIP file extracted successfully.");
        console.log("Files are extracted into the 'extracted' folder.");

    } catch (error) {
        console.log("Error:", error.message);
    }
}

extractZip();