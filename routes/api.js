const express = require('express');
const router = express.Router();
const ExampleModel = require('../models/ExampleModel');

// Sample GET Endpoint
router.get('/data', async (req, res) => {
    const data = await ExampleModel.find();
    res.json(data);
});

module.exports = router;
