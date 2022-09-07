const express = require('express');
const cors = require('cors');

const apiRouter = require('./routes');

const app = express();

app.use(cors({origin: true, credentials: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(2000, function() {
    console.log('success!');
});

app.use('/api',apiRouter);

module.exports = app;