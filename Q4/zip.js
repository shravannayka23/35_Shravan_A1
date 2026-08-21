const fs = require("fs");
const { ZipArchive } = require("archiver");

const output = fs.createWriteStream("sample.zip");

const archive = new ZipArchive({
    zlib: { level: 9 }
});

output.on("close", () => {
    console.log("ZIP file created successfully.");
    console.log("Total bytes:", archive.pointer());
});

archive.on("error", (err) => {
    console.error("Error:", err);
});

archive.pipe(output);

archive.directory("sample/", false);

archive.finalize();