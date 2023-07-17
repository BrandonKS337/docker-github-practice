const express = require("express")
const app = express()
require("dotenv").config()

app.use(express.json())

app.get("/", (req,res) => {
    res.send("Hello World, from Docker! I am the most recent change to test server!!")
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Node JS app listening from http://localhost:${PORT}`)
})