import { z } from "zod";

export const EmpresaSchema = z.object({
  nombre_empresa: z.string().min(1).max(150),
  cuit: z.string().min(1).max(13),
  razon_social: z.string().min(1).max(150),
  tipo_empresa: z.string().min(1),
  fecha_constitucion: z.string().min(1),
  telefono: z.string().min(1).max(20),
  correo_empresa: z.string().email().max(100),
  direccion_fiscal: z.string().min(1).max(200),
  actividad_principal: z.string().min(1).max(100),
  cantidad_empleados: z
    .string({
      required_error: "Campo obligatorio",
      invalid_type_error: "Debe ser un número",
    })
    .optional(),
  sitio_web: z.string().url("URL inválida").max(100).optional(),
});
