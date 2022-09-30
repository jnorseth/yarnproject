const express = require('express');
const router = express.Router();

const patternsController = require('../controllers/patterns');


//read pattern
router.get('/', patternsController.getAllPatterns);

router.get('/:id', patternsController.getSinglePattern);

// create patterns
router.post('/', patternsController.createPattern);

//update pattern
router.put('/:id', patternsController.updatePattern);

//delete pattern
router.delete('/:id', patternsController.deletePattern);

module.exports = router;