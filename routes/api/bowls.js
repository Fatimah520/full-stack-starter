const express = require('express');
const HttpStatus = require('http-status-codes');
const _ = require('lodash');

const models = require('../../models');
const interceptors = require('../interceptors');
const helpers = require('../helpers');

const router = express.Router();

// path: /api/bowls
router.get('/', async (req, res) => {
  const records = await models.Bowl.findAll();
  res.json(records.map((r) => r.toJSON()));
});

// path: /api/bowls/:id
router.get('/:id', async (req, res) => {
  const record = await models.Bowl.findByPk(req.params.id);
  if (record) {
    res.json(record.toJSON());
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

module.exports = router;
