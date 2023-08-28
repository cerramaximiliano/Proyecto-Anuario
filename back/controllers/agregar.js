const fs = require("fs/promises");
const { pathAlumnos } = require("../utils/utils");

const agregar = (info) => {
  return fs
    .readFile(pathAlumnos())
    .then((response) => JSON.parse(response))
    .then((data) => {
      return fs
        .writeFile(pathAlumnos(), JSON.stringify([...data, info]))
        .then((value) => {
          return true;
        })
        .catch((error) => {
          throw new Error("No se pudo escribir el archivo 'alumnos.json'");
        });
    })
    .catch((error) => {
      throw new Error("No se pudo leer el archivo 'alumnos.json'");
    });
};

module.exports = { agregar };
