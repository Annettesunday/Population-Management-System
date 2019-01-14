const locationFinder = require("../../utils/locationFinder");

const validateHeader = (req, res) => {
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
}

const validateName = (req,res,next) => {
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
}

const validateFemale = (req,res, next) => {
  const { female } = req.body;
  if (!female || female.trim().length === 0 || isNaN(female) || parseInt(female, 10) <  0){
    return res.status(400)
      .send({
        status: 'fail',
        data: {
          message: 'Invalid female count. Female count must be greater or equal to zero'
        }
      });
  }
  return next();
};


const validateMale = (req,res,next) => {
  const { male } = req.body;
  if(!male || male.trim().length === 0 || isNaN(male) || parseInt(male, 10) < 0){
    return res.status(400)
      .send({
        status: 'fail',
        data: {
          message: 'Invalid male count. Male count must be greater or equal to zero'
        }
      });
  }
  return next();
}

const validParentLocation = (req,res,next) => {
  const { parentLocation } = req.body;
  if (!parentLocation){
    return next();
  }
  else if
    (parentLocation.trim().length === 0 || parentLocation.trim().length < 2){
      return res.status(400)
        .send({
          status: 'fail',
          data: {
            message: 'Invalid parent location name. Parent location name must be greater than one character'
          }
        });
    }
    else {
      locationFinder.get(parentLocation)
        .then((response) => {
          req.body.parentLocationId = response.dataValues.id;
          next();
        })
        .catch((error) => {
          return res.status(404)
            .send({
              status: 'not found',
              data: {
                message: 'Invalid Parent location name.Parent Location name does not exist'
              }
            })
        })
    }
}





