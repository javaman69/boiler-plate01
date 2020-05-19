const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kimpd1210:java4198!!@cluster0-sat8i.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send("Hello World!"))

app.listen(port, () => console.log(`Example app listen at http://localhost:${port}`))