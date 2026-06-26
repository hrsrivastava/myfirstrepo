const express = require("express");
const dayjs = require("dayjs");

const getTasks = require("./manager");

const app = express();


// Default route
app.get("/", (req, res) => {

    const today = dayjs().format("DD-MM-YYYY HH:mm:ss");

    res.send(`Server running. Current Date: ${today}`);

});


// Promise usage
app.get("/promise", (req, res) => {

    getTasks()
    .then(tasks => {

        console.log("Promise Tasks:", tasks);

        res.json(tasks);

    })
    .catch(err => {

        res.send(err.message);

    });

});


// Async/Await usage
app.get("/tasks", async (req, res) => {

    try {

        const tasks = await getTasks();

        console.log("Async/Await Tasks:", tasks);

        res.json(tasks);

    }
    catch(error){

        res.status(500).send(error.message);

    }

});

// Start server
app.listen(3000, () => {

    console.log("Server running on porhttp://localhost:3000/t 3000");

});