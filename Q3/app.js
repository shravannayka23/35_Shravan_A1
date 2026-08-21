const readline = require("readline");
const chatbot = require("./chatbot");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("NodeJS Educational Chatbot");
console.log("Type 'bye' to exit.");

function askQuestion() {

    rl.question("You: ", (message) => {

        const response = chatbot.getResponse(message);

        console.log("Bot:", response);

        if (message.toLowerCase() === "bye") {
            rl.close();
        } else {
            askQuestion();
        }

    });
}

askQuestion();