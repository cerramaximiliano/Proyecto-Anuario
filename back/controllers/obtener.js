const fs = require("fs/promises");
const { pathAlumnos } = require("../utils/utils");

const obtener = ( id = -1 ) => {
    return fs.readFile(pathAlumnos() )
        .then((response) => JSON.parse(response))
        .then ((data) => {
            if( id < data.length -1 && id >= 0) return data[id]
            else return data
        })
        .catch((err) => {
            throw new Error("No se pudo leer el archivo 'alumnos.json'")
        })
};

module.exports = { obtener };
