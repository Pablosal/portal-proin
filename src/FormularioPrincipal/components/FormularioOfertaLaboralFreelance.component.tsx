import { useFormik } from "formik";
import * as React from "react";
import myFirebase, { formCollection } from "../../Firebase/fbConfig";

export interface FormularioOfertaLaboralFreelanceProps {}

const FormularioOfertaLaboralFreelance: React.FunctionComponent<FormularioOfertaLaboralFreelanceProps> = () => {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      tiempoDelProyecto: "",
      perfil: "",
      presupuesto: "",
      modalidad: "",
      descripcion: "",
      creadoEn: Date.now(),
      datoContacto: "",
    },
    onSubmit: (values) => {
      myFirebase.addJob(formCollection.ofertaLaboralFreelance, values);

      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="nombre"
        >
          Nombre empresa
        </label>
        <input
        required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="nombre"
          data-tip="nombre de la empresa o agencia reclutadora/ solo para reclutadores es permitido Nombre agencia. Para nuestro cliente del rubro X"
          name="nombre"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.nombre}
        />
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="perfil"
        >
          Perfil Requerido:{" "}
        </label>
        <input
        required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="perfil"
          data-tip="tecnologías o experiencia, etc., ej: Java nivel medio, C# nivel avanzado, al menos 1 año trabajando en células ágiles"
          name="perfil"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.perfil}
        />
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="tiempoDelProyecto"
        >
          Tiempo Del Proyecto:
        </label>
        <input
        required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="tiempoDelProyecto"
          name="tiempoDelProyecto"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.tiempoDelProyecto}
          data-tip="duración del proyecto, ej: 24 meses"
        />
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="presupuesto"
        >
          Presupuesto:
        </label>
        <input
        required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="presupuesto"
          data-tip="debe llevar un monto"
          name="presupuesto"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.presupuesto}
        />
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="descripcion"
        >
          {" "}
          Descripcion:
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-medium"
          name="descripcion"
          id="descripcion"
          cols={20}
          rows={10}
          onChange={formik.handleChange}
          data-tip="qué debe hacer el proyecto, qué ya hay hecho, qué problema resuelve, etc."
          value={formik.values.descripcion}
        ></textarea>
      </div>

      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="modalidad"
        >
          {" "}
          Modalidad:
        </label>
        <input
        required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="modalidad"
          name="modalidad"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.modalidad}
          data-tip="remoto,mixto, durante pandemia, etc"
        />
      </div>

      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="datoContacto"
        >
          {" "}
          Dato Contacto:
        </label>
        <input
        required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="datoContacto"
          name="datoContacto"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.datoContacto}
          data-tip="(nombre, e-mail y/o teléfono): (ej: Pablo Pérez pperez@empresa.cl (+569)11112222)"
        />
      </div>

      <button
        className="bg-blue-650 hover:bg-blue-700 text-white font-bold py-2 px-4  m-4"
        type="submit"
      >
        Postear
      </button>
    </form>
  );
};

export default FormularioOfertaLaboralFreelance;
