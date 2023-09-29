const express = require('express');
const router = express.Router();

router.use('/', (req, res) => {
    res.send('Web services project 3 - Andrea Brenzink');
});

module.exports = router;