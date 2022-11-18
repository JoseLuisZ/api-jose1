const {Router} = require('express')
const router = Router()

const { postMascota, getMascota, putMascota, patchMascota, deleteMascota } = require('../controller/mascota')

router.get('/',getMascota)
router.post('/', postMascota)
router.put('/', putMascota)
router.patch('/', patchMascota)
router.delete('/', deleteMascota)






module.exports = router