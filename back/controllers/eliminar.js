const fs = require("fs/promises");
const { pathAlumnos } = require("../utils/utils");

const eliminar = (id) => {
  return fs
    .readFile(pathAlumnos())
    .then((response) => JSON.parse(response))
    .then((data) => {
      if (id < 0 || id > data.length - 1) throw new Error("ID inválido");
      else {
        data.splice(id, 1);
        return fs
          .writeFile(pathAlumnos(), JSON.stringify(data))
          .then((value) => true)
          .catch((error) => {
            throw new Error("No se pudo escribir el archivo 'alumnos.json'");
          });
      }
    })
    .catch((error) => {
      throw new Error("No se pudo leer el archivo 'alumnos.json'");
    });
};

module.exports = { eliminar };
