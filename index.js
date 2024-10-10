const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');

app.use(express.json());
app.use(cors());

let messages = [];

app.get('/messages', (req, res) => {
    res.json('Jenna Van De Vyver');
})

app.post('/messages', (req, res) => {
    let message = req.body.message;
    console.log(message);
    messages.push(message);
    res.send('POST messages');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})