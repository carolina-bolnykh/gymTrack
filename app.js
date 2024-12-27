// backend server
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
app.use(express.json());

const PORT = 3030;

const templatesFolder = path.join(__dirname, "templates/");

app.get('/', (req, res) => {
    res.sendFile(templatesFolder + "index.html");
})

app.listen((PORT), () => console.log("GymTrack listening on Port " + PORT));