import React, { useEffect, useMemo, useRef, useState } from "react";
import proinLogo from "./images/logo-png.png";
import "./App.css";
import myFirebase, { formCollection } from "./Firebase/fbConfig";
import Spinner from "./images/Walk.gif";
import Formularios from "./FormularioPrincipal";
import DivDeTrabajo from "./VisorDeTrabajos/components/DivDeTrabajo";
import VisorDeFormulario from "./FormularioPrincipal/components/VisorDeFormulario";
import DivDeFreelancer from "./VisorDeTrabajos/components/DivDeFreelancer";
import Navbar from "./utils/Navbar";
import VisorDeItems from "./utils/VisorDeItems";
import DivDeSocios from "./VisorDeTrabajos/components/DivDeSocios";

//Rralizar cambio de estado segun oferta que se entregue al argumento y con eso estamos listos
function App() {
  const [tituloBusqueda, setTituloBusqueda] = useState<String>("Trabajos");
  const [trabajos, setTrabajos] = useState<any>([]);
  const activeDiv = useRef(null);
  const getTitulo = (title) => {
    setTituloBusqueda(title);
  };
  const getData = async (collectionName) => {
    setTrabajos([]);
    const data: Object[] = [];
    const firstData = await myFirebase.firestore
      .collection(collectionName).orderBy('creadoEn',"desc")
      .get();

    if (firstData.empty) {
      console.log("No documentos");
      return;
    }
    firstData.forEach((doc) => {
      data.push(doc.data());
    });
    setTrabajos([...data]);
  };

  const getJobs = () => {
    getData(formCollection.ofertaLaboral);
    getData(formCollection.ofertaLaboralFreelance);
    getData(formCollection.contizacionProyecto);
  };
  const getPartners = () => {
    getData(formCollection.busquedaDeSocio);
  };
  const getFreelancers = () => {
    getData(formCollection.viernesDePega);
  };
  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className="App h-auto bg-gradient-to-t from-green-400 via-blue-500 to-blue-650 ">
      <VisorDeFormulario />
      <main className="font-body p-20  bg-white mt-9">
        <h2 className="block text-gray-700 text-4xl font-bold my-2">
          Ultimos {tituloBusqueda}
        </h2>
        <Navbar
          getTitulo={getTitulo}
          getJobs={getJobs}
          getPartners={getPartners}
          getFreelancers={getFreelancers}
        ></Navbar>

        {tituloBusqueda === "Trabajos" && (
          <VisorDeItems
            col={true}
            data={trabajos}
            render={(data) => <DivDeTrabajo t={data} />}
          />
        )}
        {tituloBusqueda === "Socios" && (
          <VisorDeItems
            col={true}
            data={trabajos}
            render={(data) => <DivDeSocios socio={data}  />}
          />
        )}
        {tituloBusqueda === "Freelancers" && (
          <VisorDeItems
            col={false}
            data={trabajos}
            render={(data) => <DivDeFreelancer perfil={data}/>}
          />
        )}
      </main>
    </div>
  );
}

export default App;
