require('dotenv').config()
//Create a .env file in the root of your project(for storing sensitive data) & import and configure dotenv:

const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/login', (req, res) => {
    res.send('This is Login')
})
app.get('/faceBOOK', (req, res) => {
    res.send('This is Facebook')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})