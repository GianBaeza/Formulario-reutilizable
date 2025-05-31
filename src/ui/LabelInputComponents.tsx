import React from "react";
import { useFormContext } from "react-hook-form";

interface LabelInputProps {
  tipo?: string;
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  tooltip?: string;
  maxLength?: number;
  component?: React.ReactNode;
  required?: boolean;
}
export default function LabelInputComponents({ ...props }: LabelInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext(); // CONSUMIMOS DESDE EL CONTEXTO NATIVO PARA EVITAR PROS  Y RERENDERS  TODO ESTO ESTA ENVUELTO EN UN PROVIDER QUE SE ENCUENTA
  // EN  COMPONENTE FORMULARIO.
  return (
    <label htmlFor={props.placeholder}>
      {props.placeholder || ""}:
      <input
        type={props.type}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        required={props.required}
        {...register(props.name)}
      />
      {props.name &&
        errors[props.name] &&
        typeof errors[props.name]?.message === "string" && (
          <span className="text-red-500">
            {errors[props.name]?.message as string}
          </span>
        )}
    </label>
  );
}
