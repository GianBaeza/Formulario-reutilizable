import LabelInputComponents from "../ui/LabelInputComponents";
import SelectComponents from "../ui/SelectComponents";

interface ComponentePorTipoProps {
  tipo: string;
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
  tooltip?: string;
  maxLength?: number;
  component?: React.ReactNode;
  required?: boolean;
}

const ComponentePorTipo = ({
  tipo,
  name,
  type,
  label,
  placeholder,
  tooltip,
  maxLength,
  component,
  required,
  ...props
}: ComponentePorTipoProps) => {
  switch (tipo) {
    case "select":
      return (
        <SelectComponents
          name={name}
          label={label}
          tooltip={tooltip}
          required={required}
          options={[
            { value: "opcion1", label: "Opción 1" },
            { value: "opcion2", label: "Opción 2" },
          ]}
          {...props}
        />
      );
    case "input":
      return (
        <LabelInputComponents
          tipo={tipo}
          name={name}
          type={type as string}
          label={label}
          placeholder={placeholder}
          tooltip={tooltip}
          maxLength={maxLength}
          component={component}
          required={required}
          {...props}
        />
      );
    case "combo": {
      return (
        <SelectComponents
          name={name}
          label={label}
          tooltip={tooltip}
          required={required}
          options={[
            { value: "opcion1", label: "Opción 1" },
            { value: "opcion2", label: "Opción 2" },
          ]}
          {...props}
        />
      );
    }
    default:
      return <span>Tipo de componente no soportado</span>;
  }
};

export default ComponentePorTipo;
