const { createFile } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');


console.clear();

const { base, listar, hasta } = argv;

createFile( base, listar, hasta )
    .then( nameFile => console.log(`${ nameFile.magenta } create!`) )
    .catch( err => console.log( err ) );
