const express = require('express');
const router = express.Router();

router.get('/', require('./swagger'));
router.use('/words', require('./words'));

module.exports = router;