// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes'; //Sin las llaves es exportación por defecto

// console.log( owners );




export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

// console.log( getHeroeById(2) );

// find?, filter
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

// console.log( getHeroesByOwner('Marvel') );


