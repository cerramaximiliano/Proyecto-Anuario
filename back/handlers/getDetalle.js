const { obtener } = require("../controllers/obtener");

const getDetalle = async (req, res) => {
    const { id } = req.params;
    obtener(id)
      .then((data) => res.status(200).json(data))
      .catch((error) => res.status(500).json({ message: error.message }));
  };


module.exports = { getDetalle };
