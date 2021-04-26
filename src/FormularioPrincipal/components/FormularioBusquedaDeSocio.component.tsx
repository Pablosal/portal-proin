import { useFormik } from "formik";
import myFirebase, { formCollection } from "../../Firebase/fbConfig";
import * as React from "react";
import ReactTooltip from "react-tooltip";
export interface FormularioBusquedaDeSocioProps {}
const FormularioBusquedaDeSocio: React.FunctionComponent<FormularioBusquedaDeSocioProps> = () => {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      perfil: "",
      oferta: "",
      datoContacto: "",
      estadoProyecto: "",
      creadoEn: Date.now(),
    },
    onSubmit: (values) => {
      myFirebase.addJob(formCollection.busquedaDeSocio, values);
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white rounded px-8 pt-6 pb-8 mb-4"
    >
      <ReactTooltip delayHide={500} />
      <div className="mb-4">
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
          name="nombre"
          type="text"
          data-tip="(nombre de la empresa o del proyecto en particular)"
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
          name="perfil"
          type="text"
          data-tip="tecnologías o experiencia, etc., ej: Java nivel medio, C# nivel avanzado, al menos 1 año trabajando en células ágiles"
          onChange={formik.handleChange}
          value={formik.values.perfil}
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
          data-tip="(nombre, e-mail y/o teléfono): (ej: Pablo Pérez pperez@empresa.cl (+569)11112222)"
          id="datoContacto"
          name="datoContacto"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.datoContacto}
        />
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="oferta"
        >
          Oferta :
        </label>
        <input
        required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="oferta"
          data-tip="! Debe llevar porcentaje de acciones/equity"
          name="oferta"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.oferta}
        />
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="estadoProyecto"
        >
          Estado del Proyecto :
        </label>

        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-medium"
          name="estadoProyecto"
          id="estadoProyecto"
          cols={20}
          rows={10}
          data-tip="! ej: en etapa de diseño /llevamos 10% desarrollo estamos formando la sociedad , otros"
          onChange={formik.handleChange}
          value={formik.values.estadoProyecto}
        ></textarea>
      </div>

      <button
        className="bg-blue-650 hover:bg-blue-700 text-white font-bold py-2 px-4  mt-4"
        type="submit"
      >
        Postear
      </button>
    </form>
  );
};

export default FormularioBusquedaDeSocio;
