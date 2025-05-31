import { FormProvider, useForm } from "react-hook-form";
import Form from "./Form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { CampoFormulario } from "../interface/interface";
import type { ZodType } from "zod";
import { useEffect } from "react";

interface FormularioProps {
  objetoForm: Record<string, CampoFormulario>;
  handleSubmitForm: (data: Record<string, any>) => void;
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
    reset(datosDefault);
  }, [datosDefault, reset]);

  return (
    <FormProvider {...methods}>
      <Form objetoForm={objetoForm} handleSubmitForm={handleSubmitForm} />
    </FormProvider>
  );
}
