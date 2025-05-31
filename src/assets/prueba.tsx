import React from "react";

// Definimos los tipos para las opciones del select
type Option = {
  value: string | number;
  label: string;
};

// Props compartidos
type BaseProps = {
  tipo: string;
  options?: Option[]; // Solo se usa en select
} & React.InputHTMLAttributes<HTMLInputElement> &
  React.SelectHTMLAttributes<HTMLSelectElement>;

// Diccionario de componentes
const componentes: Record<string, React.FC<any>> = {
  input: (props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input {...props} />
  ),
  select: ({ options = [], ...rest }: BaseProps) => (
    <select {...rest}>
      <option value="">-- Seleccione --</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  ),
  // Agregá más tipos si querés (textarea, date, etc.)
};

const ComponentePorTipo: React.FC<BaseProps> = ({ tipo, ...props }) => {
  const Componente = componentes[tipo];

  if (!Componente) return <div>Tipo de componente desconocido: {tipo}</div>;

  return <Componente {...props} />;
};

export default ComponentePorTipo;
