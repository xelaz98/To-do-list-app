const express = require("express");
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    console.log('HERE');
    res.json({ message: "Error" });
    res.send('Hi');
})

app.listen(PORT);