import { useEffect, useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import { Formulario_Becario, Formulario_Empresa } from "./constanteForm";
import { BecarioSchema } from "./schemasZod/schemaBecario";
import { EmpresaSchema } from "./schemasZod/schemaEmpresa";

const datosSimulados = {
  tipo_de_documento: "opcion1",
  numero_documento: "ewqewqe",
  apellidos: "qweqwe",
  fecha_nacimiento: "2025-05-01",
  nacionalidad: "opcion1",
  municipio: "opcion1",
  calle: "qwewqewq",
  numero: "qweqwe",
  cuil: "eqweqweq",
  nombres: "weqweqw",
  sexo: "opcion1",
  correo_electronico: "eqweqweqe@hotmail.com",
  localidad: "opcion1",
  entre1: "eqwewqewq",
  entre2: "ewqeqweq",
  fecha_desde: "2025-05-08",
  cbu: "qweqweqwe",
  id_categoria: "opcion1",
  resolucion_alta: "eqwewqe",
  fecha_hasta: "2025-05-10",
  resolucion_baja: "ewqewqeqw",
  observacion_baja: "qeqweqw",
};

function App() {
  const [datosDefault, setDatosDefault] = useState({});
  const handleSubmitForm1 = (data) => {
    console.log("Datos del formulario:", data);
  };
  const handleSubmitForm2 = (data) => {
    console.log("Datos del formulario 2:", data);
  };

  useEffect(() => {
    setTimeout(() => {
      console.log("Simulando carga de datos...");
      setDatosDefault(datosSimulados);
    }, 5000);
  }, []);

  console.log(datosDefault, "datos por default");
  return (
    <>
      <h1>Formulario 1</h1>
      <Formulario
        handleSubmitForm={handleSubmitForm1}
        objetoForm={Formulario_Becario}
        schema={BecarioSchema}
        datosDefault={datosDefault}
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
