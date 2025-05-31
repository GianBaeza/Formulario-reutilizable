export interface CampoFormulario {
  name: string;
  type: string;
  title: string;
  placeholder?: string;
  tooltip?: string;
  maxLength?: number;
  component: string;
  required?: boolean;
}
