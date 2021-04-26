import { useFormik } from "formik";
import * as React from "react";
import ReactTooltip from "react-tooltip";
import myFirebase, { formCollection } from "../../Firebase/fbConfig";

export interface FormularioOfertaLaboralProps {}

const FormularioOfertaLaboral: React.FunctionComponent<FormularioOfertaLaboralProps> = () => {
  const [emoji, setEmoji] = React.useState<Object>();
  const formik = useFormik({
    initialValues: {
      modalidad: "",
      nombre: "",
      puesto: "",
      perfil: "",
      renta: "",
      horario: "",
      ubicacion: "",
      beneficios: "",
      tipoContrato: "",
      datoContacto: "",
      creadoEn: Date.now(),
    },
    onSubmit: (values) => {
      myFirebase.addJob(formCollection.ofertaLaboral, values);

      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white rounded px-8 pt-6 pb-8 mb-4"
    >
      <ReactTooltip />
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
          data-tip="nombre de la empresa o agencia reclutadora/ solo para reclutadores es permitido Nombre agencia. Para nuestro cliente del rubro X"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.nombre}
        />

      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="puesto"
        >
          Puesto Ofrecido:
        </label>
        <input
        required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="puesto"
          name="puesto"
          data-tip="nombre del cargo"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.puesto}
        />
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="perfil"
        >
          Perfil Requerido:{" "}
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-medium"
          name="perfil"
          id="perfil"
          cols={20}
          rows={10}
          data-tip="Java nivel medio, C# nivel avanzado, 1 año trabajando en células ágiles"
          onChange={formik.handleChange}
          value={formik.values.perfil}
        ></textarea>

      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="renta"
        >
          Rango de renta ofrecida liquida (aproximación):
        </label>
        <input
        required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="renta"
          data-tip="debe llevar un monto o rango, ej: entre 1 y 1.5 millones"
          name="renta"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.renta}
        />
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="horario"
        >
          {" "}
          Horario:
        </label>
        <input
        required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="horario"
          name="horario"
          type="text"
          data-tip="formato Lu-Vi de X a Y hrs."
          onChange={formik.handleChange}
          value={formik.values.horario}
        />
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="ubicacion"
        >
          Ubicacion:
        </label>
        <input
        required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="ubicacion"
          name="ubicacion"
          type="text"
          data-tip="al menos comuna, mientras más específico, mejor"
          onChange={formik.handleChange}
          value={formik.values.ubicacion}
        />
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="modalidad"
        >
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
          htmlFor="beneficios"
        >
          {" "}
          Beneficios:
        </label>
        <input
        required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="beneficios"
          name="beneficios"
          type="text"
          data-tip="si no hay, especificar 'ninguno' / 'buen ambiente laboral' NO es beneficio"
          onChange={formik.handleChange}
          value={formik.values.beneficios}
        />
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="tipoContrato"
        >
          {" "}
          Tipo de contrato:
        </label>
        <input
        required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="tipoContrato"
          name="tipoContrato"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.tipoContrato}
          data-tip="plazo fijo debe llevar tiempo, puede ser más de uno. ej: plazo fijo 3 meses, luego indefinido"
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
        className="bg-blue-650 hover:bg-blue-700 text-white font-bold py-2 px-4  mt-4"
        type="submit"
      >
        Postear
      </button>
    </form>
  );
};

export default FormularioOfertaLaboral;
