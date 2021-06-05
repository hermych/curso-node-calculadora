const { crearArchivo } = require('./helpers/multiplicar')
const colors = require( 'colors' );
const argv = require('./config/yargs')

console.clear();

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
    .catch( err => console.log( err ));

/*
Metodo que se uso primero antes de usar el yargs
const [ , , arg3 = 'base=5'] = process.argv;
const [ , base = 5 ] = arg3.split('=');
*/