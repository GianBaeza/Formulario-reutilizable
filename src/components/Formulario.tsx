import { FormProvider, useForm } from "react-hook-form";
import Form from "./Form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FormularioDefinicion } from "../interface/interface";
import type { ZodType } from "zod";
import { useEffect } from "react";

interface FormularioProps {
  objetoForm: FormularioDefinicion;
  handleSubmitForm: (data: Record<string, unknown>) => void;
  schema: ZodType<any, any>;
  datosDefault?: Record<string, any> | undefined;
}

export default function Formulario({
  handleSubmitForm,
  objetoForm,
  schema,
  datosDefault,
}: FormularioProps) {
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: datosDefault,
  });
  const { reset } = methods;

  useEffect(() => {
    if (datosDefault) {
      reset(datosDefault); // SI HAY DATOS POR DEFECTOS LOS SETEA SIEMPRE.
    }
  }, [datosDefault, reset]);

  return (
    <FormProvider {...methods}>
      <Form objetoForm={objetoForm} handleSubmitForm={handleSubmitForm} />
    </FormProvider>
  );
}
