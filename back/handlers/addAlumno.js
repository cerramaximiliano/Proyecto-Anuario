const { agregar } = require("../controllers/agregar");

const addAlumno = async (req, res) => {
 const {nombre, apellido, localizacion, contacto, mensaje} = req.body;
 if(nombre && apellido && localizacion.pais && localizacion.estado && localizacion.ciudad && contacto && mensaje){
    agregar({nombre, apellido, localizacion, contacto, mensaje})
        .then((confirm) => res.status(200).json({nombre, apellido, localizacion, contacto, mensaje}))
        .catch((err) => res.status(500).json({message: err}))

 }else{
    res.status(500).json({message: 'Datos insuficientes'})
 }
};

module.exports = { addAlumno };
