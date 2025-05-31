export interface Option {
  value: string;
  label: string;
}
export interface AsignacionDeOptiones {
  tipo_de_documento: Option[];
  nacionalidad: Option[];
  municipio: Option[];
  localidad: Option[];
  sexo: Option[];
  id_categoria: Option[];
}

export interface CampoFormulario {
  name: string;
  type: string;
  title: string;
  placeholder?: string;
  tooltip?: string;
  maxLength?: number;
  component: "input" | "select" | "combo";
  required?: boolean;
  options?: Option[];
}
export type FormularioDefinicion = {
  [key: string]: CampoFormulario;
};
export interface ComponentePorTipoProps {
  tipo: "select" | "input" | "combo";
  name?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  tooltip?: string;
  maxLength?: number;
  options?: Option[];
  component?: "input" | "select" | "combo";
  required?: boolean;
}
