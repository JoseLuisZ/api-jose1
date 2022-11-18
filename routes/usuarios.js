const { Router } = require('express')
const router = Router() //Obtener la función Router

router.get('/', (req, res) =>{
    //Desestructuracion de los parametros enviados por query
    const {referencia, nombre} = req.query
    res.json({
        msg: 'GET API',
        referencia,
        nombre
    })
})

router.post('/', (req, res) =>{
     //Desestructuracion de los parametros enviados por body
    const {referencia, nombre, precio} = req.body
    res.json({
        msg: 'POST API',
        referencia,
        nombre,
        precio
    })
})

router.put('/', (req, res) =>{
    res.json({
        msg: 'PUT API'
    })
})

router.delete('/', (req, res) =>{
    res.json({
        msg: 'DELETE API'
    })
})

router.patch('/', (req, res) =>{
    res.json({
        msg: 'PATCH API'
    })
})

module.exports = router