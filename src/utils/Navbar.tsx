import * as React from "react";
export interface NavbarProps {
  getTitulo: Function;
  getJobs: Function;
  getPartners: Function;
  getFreelancers: Function;
}

const Navbar: React.FunctionComponent<NavbarProps> = ({
  getTitulo,
  getJobs,
  getPartners,
  getFreelancers,
}) => {
  return (
    <ul className="flex justify-evenly items-center">
      <li
        onClick={() => {
          getTitulo("Trabajos");
          getJobs();
        }}
        className=" m-2 text-white font-bold bg-gray-600 cursor-pointer active:bg-blue-700 hover:bg-blue-650 rounded-full py-2 px-4"
      >
        Ofertas laborales
      </li>
      <li
        onClick={() => {
          getTitulo("Socios");
          getPartners();
        }}
        className="text-white font-bold bg-gray-600 cursor-pointer hover:bg-blue-650 rounded-full py-2 px-4"
      >
        Busco Socios
      </li>
      <li
        value={"Freelancers"}
        onClick={() => {
          getTitulo("Freelancers");
          getFreelancers();
        }}
        className="text-white font-bold bg-gray-600 cursor-pointer hover:bg-blue-650 rounded-full py-2 px-4"
      >
        Freelancers
      </li>
    </ul>
  );
};

export default Navbar;
