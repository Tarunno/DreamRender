const express = require('express')
const { model } = require('mongoose')
const router = express.Router()
const {GenerateImages} = require('../controllers/generateController')

router.route('/').post(GenerateImages)

module.exports = router