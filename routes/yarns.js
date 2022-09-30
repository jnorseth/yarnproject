const express = require('express');
const router = express.Router();

const yarnsController = require('../controllers/yarns');


//read yarns
router.get('/', yarnsController.getAll);

router.get('/:id', yarnsController.getSingle);

// create yarns
router.post('/', yarnsController.createYarn);

//update yarns
router.put('/:id', yarnsController.updateYarn);

//delete yarns
router.delete('/:id', yarnsController.deleteYarn);

module.exports = router;
