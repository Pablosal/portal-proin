import { useFormik } from "formik";
import * as React from "react";
import ReactTooltip from "react-tooltip";
import myFirebase, { formCollection } from "../../Firebase/fbConfig";

export interface FormularioViernesDePegaProps {}

const FormularioViernesDePega: React.FunctionComponent<FormularioViernesDePegaProps> = () => {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      descripcionEspecialidad: "",
      tipoModalidad: "",
      ciudad: "",
      breveDescripcionTecnologias: "",
      linkPortafolio: "",
      linkCV: "",
      linkGithub: "",
      datoContacto: "",
      creadoEn: Date.now(),
    },
    onSubmit: (values) => {
      myFirebase.addJob(formCollection.viernesDePega, values);

      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <ReactTooltip />
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="nombre"
        >
          Nombre
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="nombre"
          name="nombre"
          type="text"
          data-tip="Tu nombre"
          onChange={formik.handleChange}
          value={formik.values.nombre}
          required
        />
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="descripcionEspecialidad"
        >
          Descripcion Especialidad:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="descripcionEspecialidad"
          name="descripcionEspecialidad"
          type="text"
          data-tip="Semi Junior en javascript,poliglota del hola mundo, etc."
          required
          onChange={formik.handleChange}
          value={formik.values.descripcionEspecialidad}
        />
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="tipoModalidad"
        >
          {" "}
          Tipo de trabajo que busco:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="tipoModalidad"
          id="tipoModalidad"
          type="text"
          required
          data-tip="Freelance, Full-time, Part-time, Practica"
          onChange={formik.handleChange}
          value={formik.values.tipoModalidad}
        />
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="ciudad"
        >
          Ciudad:
        </label>

        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="ciudad"
          name="ciudad"
          required
          data-tip='"Santiago, Viña, Concepción" o bien puede ser "Remoto"'
          type="text"
          onChange={formik.handleChange}
          value={formik.values.ciudad}
        />
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="breveDescripcionTecnologias"
        >
          Breve Descripcion Tecnologias:{" "}
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-medium"
          name="breveDescripcionTecnologias"
          id="breveDescripcionTecnologias"
          cols={20}
          rows={10}
          required
          data-tip="Java nivel medio, C# nivel avanzado, 1 año trabajando en células ágiles"
          onChange={formik.handleChange}
          value={formik.values.breveDescripcionTecnologias}
        ></textarea>
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="linkPortafolio"
        >
          Link Portafolio:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="linkPortafolio"
          name="linkPortafolio"
          data-tip="tu portafolio my amigo"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.linkPortafolio}
        />
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="linkCV"
        >
          {" "}
          Link CV o Linkedin:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="linkCV"
          name="linkCV"
          type="text"
          onChange={formik.handleChange}
          required
          value={formik.values.linkCV}
          data-tip="Url Linkedin o pdf en dropbox, drive, etc.  // Aconsejable subirlo por feedback y para agilizar a personas interesadas el contacto.
          "
        />
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="linkGithub"
        >
          {" "}
          Link Github:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="linkGithub"
          name="linkGithub"
          type="text"
          required
          onChange={formik.handleChange}
          value={formik.values.linkGithub}
          data-tip="Url Github
          "
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
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="datoContacto"
          name="datoContacto"
          type="text"
          onChange={formik.handleChange}
          required
          value={formik.values.datoContacto}
          data-tip="(nombre, e-mail y/o teléfono): (ej: Pablo Pérez user@persona.cl (+569)11112222)"
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

export default FormularioViernesDePega;
