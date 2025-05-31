import { useFormContext } from "react-hook-form";
import ComponentePorTipo from "../hooks/useFormComponentePorTipo";
import type { CampoFormulario } from "../interface/interface";

interface FormProps {
  objetoForm: Record<string, CampoFormulario>;
  handleSubmitForm: (data: Record<string, any>) => void;
}
export default function Form({ objetoForm, handleSubmitForm }: FormProps) {
  const { handleSubmit } = useFormContext();
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      {Object.entries(objetoForm).map((campo, i) => {
        const { component } = campo[1];

        return (
          <ComponentePorTipo key={i} tipo={component as string} {...campo[1]} />
        );
      })}
      <input type="submit" />
    </form>
  );
}
