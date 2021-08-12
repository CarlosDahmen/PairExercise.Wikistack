// ============== REQUIRE ==============

const express = require('express')
const app = express()
const morgan = require('morgan')
const {db, Page, User} = require('./models')
const pageRouter = require('./models/pages')

// ============== DECLARATIONS ==============

const PORT = 8080

// ============== DB ==============

db.authenticate()
  .then(() => {
    console.log('connected to the database');
})
const initDB = async () =>{
    await Page.sync()
    await User.sync()
}

// ============== ROUTES ==============np

// +++++++++++++++ USE ++++++++++++++

app.use(morgan("dev"));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}))

// +++++++++++++++ GET ++++++++++++++

app.get('/', (req, res, next) =>{
    res.send('Hello World')
})
// ============== SERVER START ==============

// ++++++++++++++ INIT DB ++++++++++++++

initDB()

// ++++++++++++++ ROUTER ++++++++++++++

app.listen(PORT, () =>{
    console.log(`App listening at http://localhost:${PORT}`)
  })