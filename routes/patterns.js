const express = require('express');
const router = express.Router();
const schemas = require('../models/joi'); 
const middleware = require('../middleware/joi'); 
const patternsController = require('../controllers/patterns');


//read pattern
router.get('/', patternsController.getAllPatterns);

router.get('/:id', patternsController.getSinglePattern);

// create patterns
router.post('/', middleware(schemas.patternSchema), patternsController.createPattern);

//update pattern
router.put('/:id', middleware(schemas.patternSchema), patternsController.updatePattern);

//delete pattern
router.delete('/:id', patternsController.deletePattern);

module.exports = router;