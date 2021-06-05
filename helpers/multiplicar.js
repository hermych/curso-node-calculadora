const fs = require("fs");
const colors = require( 'colors' );

const crearArchivo = async( base, listar, limite ) => {

    try{
        let salida = '';
        let consola = '';

        for (let i = 1; i <= limite; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }
        
        if( listar ){
            console.log("=======================".green);
            console.log(" Tabla del: ".red, colors.blue(base));
            console.log("=======================".green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `Tabla de ${base}`;
    }catch ( err ){
        throw err;
    }
};

module.exports = {
  // crearArchivo: crearArchivo //Es redundante por eso lo reducimos abajo
  crearArchivo,
};
