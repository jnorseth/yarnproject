const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllYarns = async (req, res) => {
  const result = await mongodb.getDb().db('projectyarn').collection('yarns').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingleYarn = async (req, res) => {
  const yarnId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('projectyarn').collection('yarns').find({ _id: yarnId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createYarn = async (req, res) => {
  const yarn = {
    yarnName: req.body.yarnName,
    yarnBrand: req.body.yarnBrand,
    weight: req.body.weight,
    recNeedleHookSize: req.body.recNeedleHookSize,
    colors: req.body.colors,
    size: req.body.size,
    fiberType: req.body.yardage
  };
  const response = await mongodb.getDb().db('projectyarn').collection('yarns').insertOne(yarn);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the yarn entry.');
  }
};


const updateYarn = async (req, res) => {
  const yarnId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const yarn = {
    yarnName: req.body.yarnName,
    yarnBrand: req.body.yarnBrand,
    weight: req.body.weight,
    recNeedleHookSize: req.body.recNeedleHookSize,
    colors: req.body.colors,
    size: req.body.size,
    fiberType: req.body.yardage
  };
  const response = await mongodb
    .getDb()
    .db('projectyarn')
    .collection('yarns')
    .replaceOne({ _id: yarnId }, yarn);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the yarn entry.');
  }
};

const deleteYarn = async (req, res) => {
  const yarnId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db('projectyarn').collection('yarns').remove({ _id: yarnId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the yarn entry.');
  }
};

module.exports = {
  getAllYarns,
  getSingleYarn,
  createYarn,
  updateYarn,
  deleteYarn
};