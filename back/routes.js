const { Router } = require('express');
const router = Router();
const { getAlumnos } = require('./handlers/getAlumnos');
const { getDetalle } = require('./handlers/getDetalle');
const { addAlumno } = require('./handlers/addAlumno');
const { editAlumno } = require('./handlers/editAlumno')
const { deleteAlumno } = require('./handlers/deleteAlumno');
// Get Alumnos
router.get( '/alumnos', getAlumnos );
// Get Detalle
router.get( '/detalle/:id', getDetalle )
// Add Alumno
router.post( '/add', addAlumno )
// Edit Alumno
router.put( '/edit', editAlumno)
// Remove Alumno
router.delete( '/delete', deleteAlumno )

module.exports = router;