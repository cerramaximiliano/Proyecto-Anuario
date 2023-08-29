const { eliminar } = require("../controllers/eliminar");

const deleteAlumno = async (req, res) => {
  const {id} = req.query;
  eliminar(id)
    .then((confirm) => res.status(200).json({success: true}))
    .catch((err) => res.status(500).json({message: err.error}));
};

module.exports = { deleteAlumno };
