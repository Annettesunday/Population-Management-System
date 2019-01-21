const locationFinder = require("../utils/locationFinder");
const validation = {
validateHeader: (req, res) => {
  const header = 'content-type' in req.headers ? req.headers['content-type'].toLowerCase() : null
  if (header !== 'application/json'){
    return res.status(400)
    .send({
      status: 'fail',
      data: {
        message: 'request header not set'
      }
    });
  }
},

validateName: (req,res,next) => {
  const { name } = req.body;
  if(!name || name === undefined || name.trim().length === 0 || name.trim().length < 2) {
    return res.status(400)
      .send({
        status: 'fail',
        data: {
          message: 'Location name must have more than one character'
        }
      })
  }
  return next();
},
validateFemale: (req,res, next) => {
  const { female } = req.body;
  if (!female || female.toString().trim().length === 0 || isNaN(female) || parseInt(female, 10) <  0){
    return res.status(400)
      .send({
        status: 'fail',
        data: {
          message: 'Invalid female count. Female count must be greater or equal to zero and must be an integer'
        }
      });
  }
  return next();
},


validateMale: (req,res,next) => {
  const { male } = req.body;
  if(!male || male.toString().trim().length === 0 || isNaN(male) || parseInt(male, 10) < 0){
    return res.status(400)
      .send({
        status: 'fail',
        data: {
          message: 'Invalid male count. Male count must be greater or equal to zero and must be an integer'
        }
      });
  }
  return next();
},
}

module.exports = validation;

