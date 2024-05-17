//--------------------- FACTORY ----------------------
/* const { getUserById } = require("./callbacks");
const { buildMakePerson } = require("./factory");
const {getId, getAge} = require('./plugins/index'); */

/* const id = 3;

getUserById(id, function(error, user){
    if (error) {
        throw new Error(error);
    }

    console.log({user})
}); */

/* const makePerson = buildMakePerson({getId, getAge});


const obj = {name: 'Juan', birthdate:'1990-01-09'};

const juan = makePerson(obj);

console.log(juan);    */
//-------------------------------------------------------

//---------------------PROMISES--------------------------

/* const getPokemonById = require('./promises');

getPokemonById(3)
    .then ((Pokemon) => console.log({Pokemon}))
    .catch (() => console.log('Pokemon no encontrado.'))
    .finally (() => console.log('Final.')); */
//-------------------------------------------------------

// const {buildLogger} = require('./plugins');
// const logger = buildLogger('app.js');

// logger.log('Prueba de log');

