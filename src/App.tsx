import "./App.css";
import { Formulario_Becario, Formulario_Empresa } from "./constanteForm";
import useFormReutilizable from "./hooks/useFormReutilizable";
import type { AsignacionDeOptiones } from "./interface/interface";
import { BecarioSchema } from "./schemasZod/schemaBecario";
import { EmpresaSchema } from "./schemasZod/schemaEmpresa";

// const datosSimulados = {
//   tipo_de_documento: "opcion1",
//   numero_documento: "ewqewqe",
//   apellidos: "qweqwe",
//   fecha_nacimiento: "2025-05-01",
//   nacionalidad: "opcion1",
//   municipio: "opcion1",
//   calle: "qwewqewq",
//   numero: "qweqwe",
//   cuil: "eqweqweq",
//   nombres: "weqweqw",
//   sexo: "opcion1",
//   correo_electronico: "eqweqweqe@hotmail.com",
//   localidad: "opcion1",
//   entre1: "eqwewqewq",
//   entre2: "ewqeqweq",
//   fecha_desde: "2025-05-08",
//   cbu: "qweqweqwe",
//   id_categoria: "opcion1",
//   resolucion_alta: "eqwewqe",
//   fecha_hasta: "2025-05-10",
//   resolucion_baja: "ewqewqeqw",
//   observacion_baja: "qeqweqw",
// };
const optionsDni = [
  { value: "DNI", label: "DNI" },
  { value: "CUIL", label: "CUIL" },
  { value: "PASAPORTE", label: "PASAPORTE" },
];
const nacionalidad = [
  { value: "Argentina", label: "Argentina" },
  { value: "Bolivia", label: "Bolivia" },
  { value: "Uruguayo", label: "Uruguayo" },
];
const municipio = [
  { value: "La Plata", label: "La Plata" },
  { value: "La Boca", label: "La Boca" },
  { value: "San Telmo", label: "San Telmo" },
];
const localidad = [
  { value: "La Plata", label: "La Plata" },
  { value: "La Boca", label: "La Boca" },
  { value: "San Telmo", label: "San Telmo" },
];
const sexo = [
  { value: "Masculino", label: "Masculino" },
  { value: "Femenino", label: "Femenino" },
  { value: "No Binario", label: "No Binario" },
];
const categorias = [
  { value: "opcion1", label: "Opción 1" },
  { value: "opcion2", label: "Opción 2" },
  { value: "opcion3", label: "Opción 3" },
]; // ACA LO QUE ESTOY HACIENDO ES SIMULAR LAS OPCIONES EN CASO DE TENER OPCIONES DE LOS SELECT

function App() {
  const { Formulario, agregarleOptionsAlForm } = useFormReutilizable(); // CONSUMIMOS EL FORMULARIO Y EL AGREGAR OPCIONES DESDE EL CUSTOMHOOK SOLAMENE PARA QUE TODO ESTE CENTRALIZADO NADA MAS. Y NO TENGAMOS QUE CONSUMIR EL FORMULARIO DESDE EL "COMPONENTE" Y EL AGREGAROPCIONESALFORM DESDE UNA UTILIDAD.

  const handleSubmitForm1 = (data) => {
    // UNA VEZ QUE SE RECIBA LA DATA LA PASAMOS A UN ADAPTER Y LA MANDAMOS AL BACK
    console.log("Datos del formulario:", data);
  };
  const handleSubmitForm2 = (data) => {
    console.log("Datos del formulario 2:", data);
  };

  const optionsForm: AsignacionDeOptiones = {
    tipo_de_documento: optionsDni,
    nacionalidad: nacionalidad,
    municipio: municipio,
    localidad: localidad,
    sexo: sexo,
    id_categoria: categorias,
  }; //DECLARAMOS LAS OPCIONES DE CADA SELECT
  const formularioBecario = agregarleOptionsAlForm(
    Formulario_Becario,
    optionsForm
  ); // ESTA FUNCION LO QUE HACE ES RECIBE EL EL FORMULARIO A CREAR, PERO SIN OPCIONES,ENTONCES YO LO QUE HAGO CON ESTA FUNCIN
  // ES NO MUTAR EL OBJETO INICIAL DEL FORMULARIO, SINO CREAR UN NUEVO OBJETO, A RAIZ DE ESE OBJETO LE ASIGNO LAS OPCIONS DEPENDIENDO DE LA KEY
  // DE CADA OPTIONS FORM DECLARADO
  // ESTO SE GUDARDA EN UNA VARIABLE Y SE LA ASIGNAMOS AL FORMULARIO 1 EN ESTE CASO

  return (
    <>
      <h1>Formulario 1</h1>
      <Formulario
        handleSubmitForm={handleSubmitForm1}
        objetoForm={formularioBecario} // <-----
        schema={BecarioSchema}
        key={"Formulario_Becario"}
      />

      <hr className="h-3 bg-red-400" />
      <h1>Formulario 2</h1>
      <Formulario
        handleSubmitForm={handleSubmitForm2}
        objetoForm={Formulario_Empresa}
        schema={EmpresaSchema}
        key={"Formulario_Empresa"}
      />
    </>
  );
}

export default App;
