const fs = require('fs');
var colors = require('colors');

const crearArchivo = async(base = 5, listar, hasta) => {

    try {



        let salida = '';
        let consola = '';
        

        for (let i = 1; i <= hasta; i++) {

            consola += `${base} ${'x'.green} ${i} ${'='.green} ${(base * i).toString().cyan}\n`;

            salida += `${base} x ${i} = ${(base * i)}\n`;
        }
            

        if (listar) {
            console.log('================================================='.green);
            console.log(`                   TABLA DEL ${base}                `.bgBrightBlue);
            console.log('================================================='.green);
            console.log(consola);
        }
        
        

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
         
    } catch (err) {
        throw err;
    }
    

}


module.exports = {
    crearArchivo
}