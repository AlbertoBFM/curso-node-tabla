const fs = require('fs');

require('colors');

const createFile = async ( base = 1, listar = false, hasta = 10 ) => {
    
    try {
        let salida, consola = '';

        salida +=('===========================\n'.green);
        salida +=(`        Tabla del ${ base }\n`.yellow);
        salida +=('===========================\n'.green);
        consola +=('===========================\n');
        consola +=(`        Tabla del ${ base }\n`);
        consola +=('===========================\n');

        for (let i = 1; i <= hasta; i++){
            salida += `\t${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`;
            consola += `\t${ base } x ${ i } = ${ base * i }\n`;
        }

        if( listar )
            console.log( salida );

        fs.writeFileSync( `./salida/tabla-${ base }.txt`, consola);

        return `tabla-${ base }.txt`;
    } catch ( err ) {
        throw err;
    }

}

module.exports = {
    createFile
}