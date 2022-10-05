const { check } = require('express-validator');

exports.yarnValidation = [
    check('yarnName', 'Name is requied').not().isEmpty(),
    check('weight', 'A valid weight is required)').not().isEmpty(),
    check('weight', 'A valid weight is required)').isNumeric,
    check('fiberType', 'Fiber type is requied').not().isEmpty(),
]

exports.patternValidation = [
    check('patternName', 'Name is requied').not().isEmpty(),
    check('patternLink', 'Please include a valid link').not().isEmpty(),
    check('weight', 'A valid weight is required)').not().isEmpty().isString(),
    check('weight', 'A valid weight is required)').isNumeric,

]