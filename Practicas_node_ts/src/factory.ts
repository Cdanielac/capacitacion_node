

// const buildMakePerson = ({getId, getAge}) => {
//     return ({name, birthdate}) => {
//         return {
//             id: getId(),
//             name: name,
//             birthdate: birthdate,
//             age: getAge(birthdate),
//         }
//     }

// }


// module.exports = {
//     buildMakePerson,
// };


interface BuildMakerPersonOptions {
    getId: () => string;
    getAge: (birthdate: string) => number;
  }
  
  interface PersonOptions {
    name: string;
    birthdate: string;
  }
  
  
  export const buildMakePerson = ({ getAge, getId }: BuildMakerPersonOptions) => {
  
    return ({ name, birthdate }: PersonOptions) => {
  
      return {
        id: getId(),
        name: name,
        birthdate: birthdate,
        age: getAge(birthdate),
      }
    }
  
  }
  

  