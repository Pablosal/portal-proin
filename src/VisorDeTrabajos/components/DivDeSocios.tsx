import * as React from "react";
import { compareDates } from "../../utils/fechaDesde";
interface Socio {
  creadoEn: Date;
  datoContacto: String;
  estadoProyecto: String;
  nombre: String;
  oferta: String;
  perfil: String;
}
export interface DivDeSociosProps {
  socio: Socio;
}

const DivDeSocios: React.FunctionComponent<DivDeSociosProps> = ({ socio }) => {
  const [appear, setAppear] = React.useState<Boolean>(false);

  return (
    <div className="lg:w-9/12 w-full m-8 text-body">
      <header
        onClick={() => setAppear(!appear)}
        className="rounded-sm shadow-lg bg-green-500 hover:bg-green-800 p-3 flex cursor-pointer justify-around items-center"
      >
        <div>
          <span className=" text-md text-white">{socio.nombre}</span>
        </div>
        <div>
          <h2 className="font-trabajos font-bold text-lg text-white">
            {socio.perfil}
          </h2>
        </div>
        <div>
          <h3 className=" text-md text-white">
            Desde hace {compareDates(socio.creadoEn)} dias
          </h3>
        </div>
      </header>
      {appear && (
        <main className="bg-white flex justify-center items-center flex-col border-b-2 border-r-2 border-l-2 border-t-0 border-gray-400 p-3">
          <div className="text-justify">
            <h3 className="text-center font-bold text-lg">Estado del proyecto </h3>
            <p className="text-gray-700">{socio.estadoProyecto}</p>
          </div>
          <h4 className="font-bold ">Ofrezco:{socio.oferta}</h4>
          <h4 className="font-bold ">Contacto:{socio.datoContacto}</h4>
        </main>
      )}
    </div>
  );
};

export default DivDeSocios;
