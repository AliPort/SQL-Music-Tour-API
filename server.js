// DEPENDENCIES
const express = require('express')
const app = express()
const {Sequelize} = require('sequelize')
const bands = require('./controllers/bands_controller')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI)

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

//controllers
const bandsController=require('./controllers/bands_controller')
app.use('/bands', bandsController)

const eventsController=require('./controllers/event_controller')
app.use('/event', eventsController)

const stagesController=require('./controllers/stages_controller')
app.use('/stages', stagesController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})
