require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome, everything is working well'})
});

app.use('/questions', require('./routes/questions.routes.js'));
app.use('/games', require('./routes/games.routes.js'));

app.get('*', (req, res) =>{
    res.status(404).json({ message: 'Couldn\'t find a page'})
});

app.listen(port, host, () => console.log(`App listening at http://${host}:${port}/`));