// const {v4: uuidv4} = require('uuid');

// const getId = () => {

//     return uuidv4();
// }

// module.exports = getId;

import { v4 as uuidv4 } from 'uuid';

// getUUID is a function that returns a UUID

export const getId = () => {

  return uuidv4();
}