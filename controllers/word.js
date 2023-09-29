const Word = require('../models/word');

const getAll = async (req, res) => {
    try {
        const words = await Word.find();
        res.status(200).json(words);
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
};

const getWordById = async (req, res) => {
    try {
        const word = await Word.findById(req.params.id);
        if(!word){
            return res.status(404).json({message: err.message});
        }
        res.status(200).json(word);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};

const createWord = async (req, res) => {
    const { name, meaning, partSpeech, translation, ipa, origin, comments } = req.body;
    try{
        const newWord = new Word ({
            name,
            meaning,
            partSpeech,
            translation,
            ipa,
            origin,
            comments
        });

        const saveWord = await newWord.save();
        res.status(201).json(saveWord);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};

const updateWord = async (req, res) => {
    try{
        const wordId = req.params.id;
        const updatedWord = await Word.findByIdAndUpdate(wordId, updateData, {new: true});
        if(!updatedWord){
            return res.status(404).json({message: 'Word not found'});
        }
        res.status(200).json(updatedWord);
    }    
    catch (err){
        res.status(500).json({ message: err.message });
    }
};

const deleteWord = async (req, res) => {
    try{
        const wordId = req.body;
        const deletedWord = await Word.findByIdAndRemove(wordId);
        if (!deletedWord) {
            return res.status(404).json({ message: 'Palavra não encontrada' });
        }      
        res.status(204).send(); // Resposta de sucesso sem conteúdo
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAll,
    getWordById,
    createWord,
    updateWord,
    deleteWord
}