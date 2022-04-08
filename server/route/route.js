const express = require('express')
const route = express.Router();
const roleController = require('../controllers/roleController')

route.get('/roles', roleController.getAllRole);
route.get('/role/:id_role', roleController.getRole);
route.post('/post', roleController.postRole);
route.put('/put/role/:id_role', roleController.updateRole);
route.delete('/delete/role/:id_role', roleController.deleteRole);

module.exports = route;