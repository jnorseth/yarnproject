const express = require('express');
const router = express.Router();
const schemas = require('../models/joi'); 
const middleware = require('../middleware/joi');
const yarnsController = require('../controllers/yarns');


//read yarns
router.get('/', yarnsController.getAllYarns);

router.get('/:id', yarnsController.getSingleYarn);

// create yarns
router.post('/', middleware(schemas.yarnSchema), yarnsController.createYarn);


//update yarns
router.put('/:id', middleware(schemas.yarnSchema), yarnsController.updateYarn);

//delete yarns
router.delete('/:id', yarnsController.deleteYarn);

module.exports = router;
