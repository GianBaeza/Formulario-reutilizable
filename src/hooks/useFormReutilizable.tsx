import React from "react";
import type {
  AsignacionDeOptiones,
  FormularioDefinicion,
  Option,
} from "../interface/interface";
import Formulario from "../components/Formulario";

// LO QUE HAGO ACA SOLAMENTE ES CENTRALIZAR LA LOGICA DEL FORMULARIO Y LA FUNCION AGREGAR OPCIONES.
export default function useFormReutilizable() {
  const agregarleOptionsAlForm = (
    objetoFormulario: FormularioDefinicion,
    claveValor: AsignacionDeOptiones
  ) => {
    const nuevoObjetoFormulario = { ...objetoFormulario }; // CREO UN NUEVO OBJETO PARA NO MUTAR EL ORIGINAL Y DEOLVER EL NUEVO CON LAS OPTIONS EN CASO DE QUE CONTENGA

    Object.entries(claveValor).forEach(([key, value]) => {
      if (nuevoObjetoFormulario[key]) {
        nuevoObjetoFormulario[key].options = value as Option[];
      }
    });

    return nuevoObjetoFormulario;
  };
  return { agregarleOptionsAlForm, Formulario };
}
