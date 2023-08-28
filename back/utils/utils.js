const agregarID = (data) => {
  return data.map((e, i) => (e = { ...e, id: i }));
};

const quitarID = (data) => {
  return data.forEach(
    (e) =>
      (e = {
        nombre: e.nombre,
        apellido: e.apellido,
        localizacion: {
          pais: e.localizacion.pais,
          estado: e.localizacion.estado,
          ciudad: e.localizacion.ciudad,
        },
        contacto: e.contacto,
        mensaje: e.mensaje,
      })
  );
};

const pathAlumnos = () => {
  let path = __dirname.split("\\");
  path.pop();
  return path.join("\\") + "\\alumnos.json";
};

module.exports = { agregarID, quitarID, pathAlumnos };
