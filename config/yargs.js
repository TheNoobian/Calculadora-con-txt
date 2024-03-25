const argv = require('yargs')
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: false,
                    describe: 'Muestra la tabla de multiplicacion'
                })
                
                .check((argv, options) => {
                    if (typeof argv.l !== 'undefined' && typeof argv.l !== 'boolean') {
                        throw 'la base tiene que ser un booleano';
                    }
                    return true;
                })  
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'La base del numero a multiplicar',
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)){
                        throw 'la base tiene que ser un numero';
                    }
                    return true;
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    demandOption: false,
                    describe: 'Hasta donde se va a multiplicar'
                })
                .argv;


module.exports = argv;