
const Joi = require('joi') 
const schemas = { 
    patternSchema: Joi.object().keys({ 
        patternName: Joi.string().alphanum().required(),
        patternLink: Joi.string().alphanum().min(10).max(10000).required(),
        weight: Joi.number().integer().min(1).max(7).required(),
  }),
  // define all the other schemas below 
  yarnSchema: Joi.object().keys({ 
    yarnName: Joi.string().alphanum().min(3).max(30).required(),
    weight: Joi.number().integer().min(1).max(7).required(),
  })
}; 
module.exports = schemas;