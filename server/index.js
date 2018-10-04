const controller = require('./controller')
const express = require('express')
const bodyParser = require('body-parser')

let app = express();

app.listen(3005, () => {
    console.log('listening on port 3005')
})