const express = require('express');
const router = express.Router();


router.use('/', require('./swagger'));

router.use('/yarns', require('./yarns'))

router.use('/patterns', require('./patterns'))

module.exports = router;