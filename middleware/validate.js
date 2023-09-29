const validator = require('../helpers/validate');

const saveWord = (req, res, next) => {
    const validationRule = {
        name: 'required|string',
        meaning: 'required|string',
        partSpeech: 'required|string',
        translation: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
          res.status(412).send({
            success: false,
            message: 'Validation failed',
            data: err
          });
        } else {
          next();
        }
    });
};

module.exports = {
    saveWord
}