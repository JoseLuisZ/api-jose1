const{response}= require('express')
const Mascota = require('../models/mascota')

//Obtener
const getMascota = async (req, res=response)=> {
    //const {nombre, raza, peso} = req.query
    const mascota = await Mascota.find()//Consultar todos los documentos
    res.json({
        msg: 'GET API Mascota',
        mascota
    })
}

//Enviar
const postMascota = async (req,res) =>{
    //Desestructuración
    const {nombre, raza, peso} = req.body
    //Recibir parametros y desestructurarlos
    //Instanciar el objeto con los parametros y recibirlos
    const mascota = new Mascota({nombre, raza, peso})

    await mascota.save()//Guardar en la base de datos

    res.json({
        msg: 'POST API Mascota',
        mascota
    })
}
 
//Modificar todos los valores
const putMascota = async(req, res)=>{
    //Desestructuracion
    const { nombre , raza, peso } = req.body
    const mascota = await Mascota.findOneAndUpdate({nombre: nombre,}, {raza: raza}, {peso: peso})

    res.json({
        msg: "PUT API Mascota",
        mascota
    })
}

//Modificaciones parciales
const patchMascota = async(req,res)=>{
    const { nombre, peso} = req.body
    const mascota = await Mascota.findOneAndUpdate({nombre: nombre}, {peso: peso})

    res.json({
        msg: "PATCH API Mascota",
        mascota
    })
}

//Eliminar
const deleteMascota = async(req, res) =>{
    const { nombre } = req.query

    const mascota = await Mascota.findOneAndDelete({nombre : nombre})//ANTES DE LOS DOS PUNTOS ES PARAMETRO Y DESPUES DE LOS DOS PUNTOS ES LA VARIABLE

    res.json({
        msg: 'DELETE API Mascota',
        mascota
    })
}  


module.exports = {
    getMascota,
    postMascota,
    putMascota,
    patchMascota,
    deleteMascota
}
