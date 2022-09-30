const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllPatterns = async (req, res) => {
  const result = await mongodb.getDb().db('projectyarn').collection('patterns').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSinglePattern = async (req, res) => {
  const patternId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('projectyarn').collection('patterns').find({ _id: patternId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createPattern = async (req, res) => {
  const pattern = {
    patternName: req.body.patternName,
    patternLink: req.body.patternLink,
    weight: req.body.weight,
    fiberType: req.body.fibertype
  };
  const response = await mongodb.getDb().db('projectyarn').collection('patterns').insertOne(pattern);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the pattern entry.');
  }
};


const updatePattern = async (req, res) => {
  const patternId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const pattern = {
    patternName: req.body.patternName,
    patternLink: req.body.patternLink,
    weight: req.body.weight,
    fiberType: req.body.fibertype
  };
  const response = await mongodb
    .getDb()
    .db('projectyarn')
    .collection('patterns')
    .replaceOne({ _id: patternId }, pattern);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the pattern entry.');
  }
};

const deletePattern = async (req, res) => {
  const patternId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db('projectyarn').collection('patterns').remove({ _id: patternId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the pattern entry.');
  }
};

module.exports = {
  getAllPatterns,
  getSinglePattern,
  createPattern,
  updatePattern,
  deletePattern
};