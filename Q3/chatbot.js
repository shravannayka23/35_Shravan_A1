function getResponse(message) {

    message = message.toLowerCase();

    if (message.includes("node")) {
        return "Node.js is a JavaScript runtime built on Chrome's V8 engine.";
    }

    if (message.includes("npm")) {
        return "NPM is the package manager for Node.js.";
    }

    if (message.includes("express")) {
        return "Express is a web framework for Node.js.";
    }

    if (message.includes("javascript")) {
        return "JavaScript is a programming language used for web development.";
    }

    if (message.includes("hello")) {
        return "Hello! Welcome to the NodeJS chatbot.";
    }

    if (message.includes("bye")) {
        return "Goodbye!";
    }

    return "Sorry, I don't know about that topic.";
}

module.exports = {
    getResponse
};