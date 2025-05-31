import { z } from "zod";

export const BecarioSchema = z.object({
  tipo_de_documento: z.string().min(1, "Campo obligatorio"),
  numero_documento: z
    .string()
    .min(1, "Campo obligatorio")
    .max(8, "Máximo 8 caracteres"),
  apellidos: z.string().min(1).max(100),
  fecha_nacimiento: z.string().min(1, "Campo obligatorio"), // o z.date() si usás Date
  nacionalidad: z.string().min(1),
  municipio: z.string().min(1),
  calle: z.string().min(1).max(50),
  numero: z.string().min(1).max(20),
  cuil: z.string().min(1),
  nombres: z.string().min(1).max(100),
  sexo: z.string().min(1),
  correo_electronico: z.string().email("Formato de email inválido").max(100),
  localidad: z.string().min(1),
  entre1: z.string().min(1).max(50),
  entre2: z.string().min(1).max(50),
  fecha_desde: z.string().min(1),
  cbu: z.string().min(1).max(22),
  id_categoria: z.string().min(1),
  resolucion_alta: z.string().min(1).max(50),
  fecha_hasta: z.string().min(1),
  resolucion_baja: z.string().min(1).max(50),
  observacion_baja: z.string().min(1).max(100),
});
