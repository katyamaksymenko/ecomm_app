const { validationResult } = require('express-validator');

module.exports = {
    handleErrors(templateFunk) {
        return ( req, res, next ) => {
            const errors = validationResult(req);

            if(!errors.isEmpty()) {
                return res.send(templateFunk ({ errors }))
            }   
            
            next();
        };
    }
};