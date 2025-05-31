import { useFormContext } from "react-hook-form";
import ComponentePorTipo from "../hooks/useFormComponentePorTipo";
import type { FormularioDefinicion } from "../interface/interface";

interface FormProps {
  objetoForm: FormularioDefinicion;
  handleSubmitForm: (data: Record<string, unknown>) => void;
}
export default function Form({ objetoForm, handleSubmitForm }: FormProps) {
  const { handleSubmit } = useFormContext();
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      {Object.entries(objetoForm).map(([key, campo]) => {
        const componente = campo.component;

        return (
          <ComponentePorTipo
            key={key}
            tipo={componente as "select" | "input" | "combo"}
            {...campo}
          />
        );
      })}
      <input type="submit" />
    </form>
  );
}
