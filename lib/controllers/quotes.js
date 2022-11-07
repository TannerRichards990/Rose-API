const { Router } = require('express');
const { Quote } = require('../models/Quote');


module.exports = Router()
  .post('/', async (req, res, next) => {
    const insert = await Quote.insert(req.body);
    res.json(insert);
  });
  


