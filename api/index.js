const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/', require('./routes/generateRoute'))


app.listen(port, () => {
  console.log(`Server started at port: ${port}`.black.bgCyan)
})
