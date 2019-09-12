// Main Routers
var express = require('express')
var router = express.Router()

// Sub Routers
var _add = require('./sub_route/add')
var _remove = require('./sub_route/delete')
var _read = require('./sub_route/read')
var _update = require('./sub_route/update')

router.post('/add', _add.func)
router.post('/delete', _remove.func)
router.post('/read', _read.func)
router.post('/read_all', _read.all)
router.post('/update', _update.func)

module.exports = router
