const { editar } = require("../controllers/editar");

const editAlumno = async (req, res) => {
    const { nombre, apellido, localizacion, contacto, mensaje } = req.body;
    const { id } = req.query;

    editar(id, {nombre, apellido, localizacion, contacto, mensaje})
        .then((confirm) => res.status(200).json({success: true }))
        .catch(err => res.status(500).json({message: err}))

    };

module.exports = { editAlumno };
