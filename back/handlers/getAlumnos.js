const { obtener } = require("../controllers/obtener");

const getAlumnos = async (req, res) => {
    obtener().then((data) => res.status(200).json(data))
                .catch((err) => res.status(500).json({message: err.message}));
};

module.exports = { getAlumnos };
