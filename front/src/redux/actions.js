import {
  GET_ALUMNOS,
  ADD_ALUMNO,
  EDIT_ALUMNO,
  REMOVE_ALUMNO,
  FILTRO,
  ORDEN,
  RESET,
} from "./types";
import axios from 'axios';

export function getAlumnos() {
  return async function (dispatch){
    try {
      const {data} = await axios.get('http://localhost:3001/alumnos')
      if(data) dispatch({type: GET_ALUMNOS, payload: data})
    }catch(err){
      console.log(err)
    }
  }
}

export function addAlumno(nuevoAlumno) {
  return {
    type: ADD_ALUMNO,
    payload: nuevoAlumno,
  };
}

export function editAlumno(id, alumnoEditado) {
  return {
    type: EDIT_ALUMNO,
    payload: { alumnoEditado, id },
  };
}

export function removeAlumno(id) {
  return {
    type: REMOVE_ALUMNO,
    payload: id,
  };
}

export function filtrarAlumnos(pais) {
  return {
    type: FILTRO,
    payload: pais,
  };
}

export function ordenarAlumnos(orden) {
  return {
    type: ORDEN,
    payload: orden,
  };
}

export function resetAlumnos() {
  return {
    type: RESET,
  };
}
