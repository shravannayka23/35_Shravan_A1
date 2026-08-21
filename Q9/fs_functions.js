const fs = require('fs');

console.log("===== FS MODULE DEMONSTRATION =====");

// 1. Write file
fs.writeFileSync(
    'sample.txt',
    'Hello NodeJS!\nThis file is created using fs module.'
);

console.log("1. File created successfully.");

// 2. Read file
const data = fs.readFileSync('sample.txt', 'utf8');

console.log("\n2. File Content:");
console.log(data);

// 3. Append data
fs.appendFileSync(
    'sample.txt',
    '\nThis line is appended using fs module.'
);

console.log("\n3. Data appended successfully.");

// 4. File information
const stats = fs.statSync('sample.txt');

console.log("\n4. File Information:");
console.log("File Size:", stats.size, "bytes");
console.log("Is File:", stats.isFile());

// 5. Rename file
fs.renameSync('sample.txt', 'new_sample.txt');

console.log("\n5. File renamed successfully.");

// 6. Check file exists
console.log(
    "\n6. File Exists:",
    fs.existsSync('new_sample.txt')
);

console.log("\n===== FS MODULE PROGRAM COMPLETED =====");