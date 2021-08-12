
const express = require('express');
const router = express.Router();
const { addPage, editPage, main, userList, userPages, wikiPage } = require('../views/')

// ============== LOCALHOST/wiki/ ==============

router.get("/", (req, res) => {
  res.send('wiki page')
})

router.post("/", (req, res) => {
  res.send('wiki page')
})

// ============== LOCALHOST/wiki/add ==============

router.get("/add", (req, res) => {
  res.send(addPage())
})

module.exports = router
