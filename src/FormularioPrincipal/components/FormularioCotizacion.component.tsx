import { useFormik } from "formik";
import * as React from "react";
import ReactTooltip from "react-tooltip";
import myFirebase, { formCollection } from "../../Firebase/fbConfig";

export interface FormularioCotizacionProps {}

const FormularioCotizacion: React.FunctionComponent<FormularioCotizacionProps> = () => {
  const formik = useFormik({
    initialValues: {
      descripcionDeProyecto: "",
      tiempoLimite: "",
      estadoActualDelProyecto: "",
      presupuestoAproximado: "",
      datoContacto: "",
      creadoEn: Date.now(),
    },
    onSubmit: (values) => {
      myFirebase.addJob(formCollection.contizacionProyecto, values);

      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <ReactTooltip />
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="descripcionDeProyecto"
        >
          Descripcion de proyecto
        </label>
        <input
        required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="descripcionDeProyecto"
          name="descripcionDeProyecto"
          type="text"
          data-tip="qué debe hacer el proyecto, qué ya hay hecho, qué problema resuelve, etc."
          onChange={formik.handleChange}
          value={formik.values.descripcionDeProyecto}
        />
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="tiempoLimite"
        >
          Tiempo limite:
        </label>
        <input
        required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="tiempoLimite"
          data-tip="ej: máximo 2 meses"
          name="tiempoLimite"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.tiempoLimite}
        />
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="estadoActualDelProyecto"
        >
          Estado actual del proyecto:
        </label>

        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-medium"
          name="estadoActualDelPRoyecto"
          id="estadoActualDelPRoyecto"
          cols={20}
          rows={10}
          datat-tip="ej: en etapa de diseño/llevamos 10% desarrollo,otros"
          onChange={formik.handleChange}
          value={formik.values.estadoActualDelProyecto}
        ></textarea>
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="presupuestoAproximado"
        >
          Rango de presupuestoAproximado ofrecida liquida (aproximación):
        </label>
        <input
        required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="presupuestoAproximado"
          name="presupuestoAproximado"
          data-tip="debe llevar un monto o rango, lo que se estima que se va a pagar"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.presupuestoAproximado}
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
          data-tip="(nombre, e-mail y/o teléfono): (ej: Pablo Pérez pperez@empresa.cl (+569)11112222)"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.datoContacto}
        />
      </div>

      <button
        className="bg-blue-650 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4"
        type="submit"
      >
        Postear
      </button>
    </form>
  );
};

export default FormularioCotizacion;
