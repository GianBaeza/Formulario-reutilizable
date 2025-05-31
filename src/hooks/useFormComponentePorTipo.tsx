import type { ComponentePorTipoProps } from "../interface/interface";
import LabelInputComponents from "../ui/LabelInputComponents";
import SelectComponents from "../ui/SelectComponents";

const ComponentePorTipo = ({
  tipo,
  type,
  label,
  placeholder,
  tooltip,
  maxLength,
  component,
  required,
  ...props
}: ComponentePorTipoProps) => {
  const { name } = props;
  const componentes = {
    // SE CAMBIO EL SWITCH POR UN OBJETO ENTONCES SOLAMENTE RETORNAMOS LO QUE NECESITAMOS SEGUN EL TIPOP
    select: (
      <SelectComponents
        name={name}
        label={label}
        tooltip={tooltip}
        required={required}
        {...props}
      />
    ),
    input: (
      <LabelInputComponents
        tipo={tipo}
        name={name ?? ""}
        type={type as string}
        label={label}
        placeholder={placeholder}
        tooltip={tooltip}
        maxLength={maxLength}
        component={component}
        required={required}
        {...props}
      />
    ),
    combo: (
      <SelectComponents
        name={name}
        label={label}
        tooltip={tooltip}
        required={required}
        {...props}
      />
    ),
  };
  if (!componentes[tipo]) {
    console.warn(`Tipo de componente no reconocido: ${tipo}`);
  }
  return componentes[tipo] || null;
};

export default ComponentePorTipo;
