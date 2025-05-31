import { useFormContext } from "react-hook-form";

interface SelectComponentsProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: { value: string; label: string }[];
  tipo?: string;
  name?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  tooltip?: string;
  maxLength?: number;
  component?: React.ReactNode;
  required?: boolean;
  props?: React.SelectHTMLAttributes<HTMLSelectElement>;
}

export default function SelectComponents({ ...props }: SelectComponentsProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <select {...props} {...register(props.name || "")}>
        <option value="" disabled>
          Seleccione {props.name}
        </option>
        {props.options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {props.name &&
        errors[props.name] &&
        typeof errors[props.name]?.message === "string" && (
          <span className="text-red-500">
            {errors[props.name]?.message as string}
          </span>
        )}
    </>
  );
}
