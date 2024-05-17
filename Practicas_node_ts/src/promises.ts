// const { http } = require("./plugins");

// const getPokemonById = async(id) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//     /*const resp = await fetch(url);
//     const pokemon = await resp.json(); */
//     //throw new Error('Pokemon no encontrado.');
//     const pokemon = await http.get(url);


//     return pokemon.name;
// }

// module.exports = getPokemonById;

import { http } from './plugins';

export const getPokemonById = async( id: string|number ):Promise<string> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

  const pokemon = await http.get( url );

  // const resp = await fetch( url );
  // const pokemon = await resp.json();


  // throw new Error('Pokemon no existe');
  
  return pokemon.name;
  
  // return fetch( url )
  //   .then( ( resp ) => resp.json())
  //   // .then( () => { throw new Error('Pokemon no existe') })
  //   .then( ( pokemon ) => pokemon.name );

}

