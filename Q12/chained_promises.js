function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1: User created successfully.");
            resolve("User ID: 101");
        }, 1000);
    });
}

function task2(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2: User details fetched.");
            console.log(userId);
            resolve("Shravan");
        }, 1000);
    });
}

function task3(userName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 3: Welcome message generated.");
            console.log("Welcome", userName);
            resolve("All tasks completed successfully.");
        }, 1000);
    });
}

console.log("===== CHAINED PROMISES =====");

task1()
    .then((userId) => {
        return task2(userId);
    })
    .then((userName) => {
        return task3(userName);
    })
    .then((result) => {
        console.log("\nFinal Result:");
        console.log(result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });