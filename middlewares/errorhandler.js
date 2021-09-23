function errorHandler(err, req, res, next) {
  let code = null
  let message = null

  if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
    code = 400
    const errors = err.errors.map( el => {
      return el.message
    })
    message = { message: errors}
  } else if ( err.name === 'Unauthorized' ) {
    code = 401
    message = { message: 'Email/Password is wrong' }
  } else if ( err.name === 'InvalidToken' ) {
    code = 401
    message = { message: 'Invalid Token' }
  } else if ( err.name === 'Forbidden' ) {
    code = 403
    message = { message: 'Forbidden to Access' }
  } else if (err.name === "NotFound") {
    code = 404
    message = { message: 'Error Not found'}
  } else {
    code = 500
    message = { message: 'Internal Server Error'}
  }
  res.status(code).json(message) 
}

module.exports = errorHandler