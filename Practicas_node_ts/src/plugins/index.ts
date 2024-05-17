// const getId = require('./get-id.plugin')
// const getAge = require('./get-age.plugin');
// const {http} = require('./http-client.plugin');
// const buildLogger = require('./logger.plugin');

// module.exports ={
//     getId,
//     getAge,
//     http,
//     buildLogger,
// };


export { getAge } from './get-age.plugin';
export { getId } from './get-id.plugin';
export { httpClientPlugin as http } from './http-client.plugin';
export { buildLogger } from './logger.plugin';
