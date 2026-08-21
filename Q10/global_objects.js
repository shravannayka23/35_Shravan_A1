console.log("===== NODEJS GLOBAL OBJECTS =====");

console.log("\n1. __dirname:");
console.log(__dirname);

console.log("\n2. __filename:");
console.log(__filename);

console.log("\n3. Process ID:");
console.log(process.pid);

console.log("\n4. Operating System:");
console.log(process.platform);

console.log("\n5. NodeJS Version:");
console.log(process.version);

console.log("\n6. Current Working Directory:");
console.log(process.cwd());

console.log("\n===== COMMAND LINE ARGUMENTS =====");

console.log("Arguments:");

for (let i = 2; i < process.argv.length; i++) {
    console.log(`Argument ${i - 1}: ${process.argv[i]}`);
}

console.log("\n===== PROGRAM COMPLETED =====");