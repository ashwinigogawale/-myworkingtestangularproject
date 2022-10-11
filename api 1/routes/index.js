var express = require('express');
var router = express.Router();
const ObjectID = require('mongodb').ObjectID;

router.get('/register1', (req, res, next) => {
  req.collection.find({})
    .toArray()
    .then(results => res.json(results))
    .catch(error => res.send(error));
});


router.post('/register1', (req, res, next) => {
  const {fname, lname,password,email,phone,msg } = req.body;
  if (!fname || !lname || !password|| !email || !phone|| !msg) {
    return res.status(400).json({
      message: 'All Field are required',
    });
  }
  

  const payload = {fname, lname,password,email, phone,msg };
  req.collection.insertOne(payload)
    .then(result => res.json(result.ops[0]))
    .catch(error => res.send(error));
});

router.delete('/register1/:id', (req, res, next) => {
  const { id } = req.params;
  const _id = ObjectID(id);
  req.collection.deleteOne({ _id })
    .then(result => res.json(result))
    .catch(error => res.send(error));
});

module.exports = router;