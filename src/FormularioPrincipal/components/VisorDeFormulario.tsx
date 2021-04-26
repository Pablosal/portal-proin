import * as React from "react";
import Formularios from "..";
import proinLogo from "../../images/logo-png.png";

export interface VisorDeFormularioProps {}
export enum Ofertas {
  OfertaLaboral,
  BusquedadeSocio,
  BusquedaLaboralFreelance,
  PautadeCotización,
  BusquedaLaboral,
}

const VisorDeFormulario: React.FunctionComponent<VisorDeFormularioProps> = () => {
  const [tipoOferta, setTipoOferta] = React.useState<string | Ofertas>(
    Ofertas.OfertaLaboral
  );

  return (
    <header className="App-header font-textos max-w-full w-full mx-auto bg-white rounded-xl mg-5 shadow-md overflow-hidden md:max-w-2xl">
      <img
        src={proinLogo}
        className="rounded-full h-32 w-32"
        alt="logo proin"
      />
      <div className="flex flex-col m-8">
        <label
          className="block text-gray-700 text-xl font-bold mb-2"
          htmlFor="ofertaLaboral"
        >
          Publica tu Oferta Laboral en Proin Chile
        </label>
        <select
          className="text-black text-center"
          id="ofertaLaboral"
          name="ofertaLaboral"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => {
            setTipoOferta(e.currentTarget.value);
          }}
          value={tipoOferta}
        >
          <option
            value={Ofertas.OfertaLaboral}
            defaultChecked
            defaultValue={Ofertas.OfertaLaboral}
          >
            Oferta Laboral
          </option>
          <option value={Ofertas.BusquedadeSocio}>Busqueda de Socio</option>
          <option value={Ofertas.BusquedaLaboralFreelance}>
            Oferta Laboral Freelance
          </option>
          <option value={Ofertas.PautadeCotización}>Pauta de Cotización</option>
          <option value={Ofertas.BusquedaLaboral}>
            Busqueda Laboral #viernesdepega
          </option>
        </select>
      </div>

      {tipoOferta == Ofertas.OfertaLaboral && (
        <Formularios.FormularioOfertaLaboral />
      )}
      {tipoOferta == Ofertas.BusquedaLaboralFreelance && (
        <Formularios.FormularioOfertaLaboralFreelance />
      )}
      {tipoOferta == Ofertas.BusquedadeSocio && (
        <Formularios.FormularioBusquedaDeSocio />
      )}
      {tipoOferta == Ofertas.BusquedaLaboral && (
        <Formularios.FormularioViernesDePega />
      )}
      {tipoOferta == Ofertas.PautadeCotización && (
        <Formularios.FormularioCotizacion />
      )}
    </header>
  );
};

export default VisorDeFormulario;
