'use strict'

const express = require('express')
const auth = require('../middlewares/auth')
const productoCtrl = require('../controllers/producto')
const userCtrl = require('../controllers/user')

const api = express.Router()

api.get('/producto', auth, productoCtrl.getProductos)
api.get('/producto/:id', productoCtrl.getProducto)
api.post('/producto', productoCtrl.saveProducto)
api.put('/producto/:id', productoCtrl.updateProducto)
api.delete('/producto/:id', productoCtrl.deleteProducto)

api.post('/signin', userCtrl.signIn)
api.post('/signup', userCtrl.signUp)

api.get('/private', auth, (req, res) => {
    res.status(200).send({ message: 'Acceso Concedido'})
})

module.exports = api