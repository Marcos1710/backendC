const express = require('express')
const mongoose = require('mongoose')
const routes = require('../config/routes')

const app = express()
app.use(express.json())
app.use(routes)

mongoose.connect('mongodb+srv://teste:teste@estudos-8xuha.mongodb.net/estudos?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.listen(3312, ()  => {
    console.log('Backend executando...')
})