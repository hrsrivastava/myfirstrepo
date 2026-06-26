const fs = require("fs");
const path = require("path");
// Global Object (__dirname) to get current directory
const filePath = path.join(__dirname, "data.json");

// Promise function to read data
function getTasks() {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                const tasks = JSON.parse(data).tasks;
                resolve(tasks);
            }
        });
    });
}

// Custom Module export
module.exports = getTasks;