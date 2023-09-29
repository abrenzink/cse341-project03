const express = require('express');
const router = express.Router();

const wordsController = require('../controllers/word');
const validation = require('../middleware/validate');

router.get('/', wordsController.getAll);

router.get('/:id', wordsController.getWordById);

router.post('/', validation.saveWord, wordsController.createWord);

router.put('/:id', validation.saveWord, wordsController.updateWord);

router.delete('/:id', wordsController.deleteWord);

module.exports = router;