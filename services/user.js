
const { serverResponse } = require('../utils/global');

const userService =  {
  createUser: async () => {
    console.log('creating user')
  
    return serverResponse(true, 'User created');  
  },
}

module.exports = userService