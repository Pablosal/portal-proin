import * as React from "react";
import { compareDates } from "../../utils/fechaDesde";
import { palabrasDeLenguaje } from "../../utils/palabrasClave";
export interface DivDeTrabajoProps {
  t: any;
}

const DivDeTrabajo: React.FunctionComponent<DivDeTrabajoProps> = ({ t }) => {
  const [appear, setAppear] = React.useState<Boolean>(false);
  return (
    <div className="lg:w-9/12 w-full m-8 text-body">
      <header
        onClick={() => setAppear(!appear)}
        className="rounded-sm shadow-lg bg-blue-500 hover:bg-blue-650 p-3 flex cursor-pointer justify-around items-center"
      >
        <div>
          <h2 className="font-trabajos font-bold text-lg text-white">
            {t.puesto}
          </h2>
          <span className=" text-md text-white">{t.nombre}</span>
        </div>
        <div>
          <ul className="flex flex-wrap ">
            {palabrasDeLenguaje(t.perfil).map((palabra, index) => (
              <span
                key={index}
                className="hover:bg-gray-500 m-2 rounded-lg border-white border-2 p-2 text-xs text-white"
              >
                {palabra}
              </span>
            ))}
          </ul>
        </div>
        <div>
          <h3 className=" text-md text-white">
            Desde hace {compareDates(t.creadoEn)} dias
          </h3>
        </div>
      </header>
      {appear && (
        <main className="bg-white flex justify-center items-center flex-col border-b-2 border-r-2 border-l-2 border-t-0 border-gray-400 p-3">
          <div className="text-justify">
            <p>
              <span className="font-bold  text-md">Tipo de Contrato: </span>

              {t.tipoContrato}
            </p>
            <p>
              <span className="font-bold  text-md">Perfil Requerido:</span>
              {t.perfil}
            </p>
            <p>
              <span className="font-bold  text-md">Horario Laboral:</span>
              {t.horario}
            </p>
            <h3>
              <span className="font-bold  text-md">Renta Ofrecida:</span>
              {t.renta}
            </h3>
            <h3>
              <span className="font-bold  text-md">Modalidad:</span>
              {t.modalidad}
            </h3>
            <h3>
              <span className="font-bold  text-md">Postulacion:</span>

              {t.datoContacto}
            </h3>
          </div>
        </main>
      )}
    </div>
  );
};

export default DivDeTrabajo;
