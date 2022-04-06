const express = require('express')
const route = express.Router();
const biodataController = require('../controllers/biodataController');
const roleController = require('../controllers/roleController')

//biodata
route.get('/api/biodata', biodataController.getAllBiodata);
route.get('/api/biodata/specific/:id', biodataController.getBiodata);
route.post('/api/upload', biodataController.postBiodata);
route.put('/api/update/:id', biodataController.updateBiodata);
route.delete('/api/delete/:id', biodataController.deleteBiodata)

//role
route.get('/roles', roleController.getAllRole);
route.get('/role/:id_role', roleController.getRole);
route.post('/post', roleController.postRole);
route.put('/put/role/:id_role', roleController.updateRole);
route.delete('/delete/role/:id_role', roleController.deleteRole);

module.exports = route;