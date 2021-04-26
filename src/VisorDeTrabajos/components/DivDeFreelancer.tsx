import * as React from "react";
import Gravatar from "react-gravatar";

interface PerfilDe {
  nombre: string;
  ciudad: string;
  datoContacto: string;
  descripcionEspecialidad: string;
  linkCV: string;
  linkPortafolio: string;
  linkGithub:string;
  tipoModalidad: string;
  creadoEn: Date;
}
export interface DivDeFreelancerProps {
  perfil: PerfilDe;
}
const DivDeFreelancer: React.FunctionComponent<DivDeFreelancerProps> = ({
  perfil,
}) => {
  React.useEffect(() => {
    console.log(perfil);
  }, [perfil]);
  const [contactar, setContactar] = React.useState(false);
  return (
    <div className="border-gray-500 border-2 hover:shadow-md hover:bg-gray-200 mt-5">
      <div className="py-2 flex space-x-2 flex-col items-center justify-center">
        {/* <div className="w-20 h-20 "> */}
        {/* <img
            className="rounded-full border-4 border-yellow-400"
            src="https://i0.wp.com/geekazos.com/wp-content/uploads/2014/06/Incognito-Facebook.jpg"
            alt=""
          /> */}
        {/* </div> */}
        <div>
          <p className=" text-lg text-gray-900 font-bold">{perfil.nombre}</p>
          <p className="text-gray-900 font-bold text-md">
            {perfil.descripcionEspecialidad}
          </p>
        </div>
        {contactar ? (
          <div className="flex flex-col my-6">
            <span>Contacto</span>

            <span>{perfil.datoContacto}</span>
          </div>
        ) : (
          <button
            onClick={() => setContactar(true)}
            className="my-6 text-2xl font-bold font-textos justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-blue-500 hover:bg-blue-650 px-4 py-1 flex items-center hover:shadow-lg"
          >
            Contacto
          </button>
        )}
      </div>
      <div className="py-4 flex justify-center items-center w-full divide-x divide-gray-400 divide-solid">
        {perfil.linkPortafolio && (
          <span className="text-center px-2 flex flex-col">
            <a href={perfil.linkPortafolio} target="_blank">
              <i className="fas fa-laptop fa-2x font-bold text-gray-700 cursor-pointer hover:text-red-400"></i>
            </a>
            <span className="text-gray-600"> Portafolio</span>
          </span>
        )}
        <span className="text-center px-2 flex flex-col">
          <a href={perfil.linkGithub} target="_blank">
            <i className="fab fa-github fa-2x font-bold text-gray-700 cursor-pointer hover:text-black"></i>
          </a>
          <span className="text-gray-600"> Github</span>
        </span>
        <span className="text-center px-2 flex flex-col">
          <a href={perfil.linkCV} target="_blank">
            <i className="far fa-id-card fa-2x font-bold text-gray-700 cursor-pointer hover:text-blue-650"></i>
          </a>
          <span className="text-gray-600"> Curriculum</span>
        </span>
      </div>
    </div>
  );
};

export default DivDeFreelancer;
