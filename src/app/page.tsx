import Image from "next/image";
import CardGas from "@/components/CardGas";
//import image
import imgMaps from "@/image/img-maps.svg";

export default function Home() {
  const dataJson = [
    {
      id: 0,
      title: "PDS Estacion Calle 83",
      attr_industrial: "com. industrial",
      id_contrato: "SC-22-023",
      cumplimiento: "68",
      status: "Activo",
    },
    {
      id: 1,
      title: "PDS Estacion Calle 30",
      attr_industrial: "com. industrial",
      id_contrato: "SC-22-023",
      cumplimiento: "80",
      status: "Disable",
    },
    {
      id: 2,
      title: "PDS Estacion Calle 84",
      attr_industrial: "com. industrial",
      id_contrato: "SC-22-023",
      cumplimiento: "68",
      status: "Activo",
    },
    {
      id: 3,
      title: "PDS Estacion Calle 30",
      attr_industrial: "com. industrial",
      id_contrato: "SC-22-023",
      cumplimiento: "68",
      status: "Activo",
    },
    {
      id: 4,
      title: "PDS Estacion Calle 84",
      attr_industrial: "com. industrial",
      id_contrato: "SC-22-023",
      cumplimiento: "68",
      status: "Activo",
    },
    {
      id: 5,
      title: "PDS Estacion Calle 30",
      attr_industrial: "com. industrial",
      id_contrato: "SC-22-023",
      cumplimiento: "68",
      status: "Activo",
    },
  ];

  return (
    <section className="flex justify-center mt-4 mx-5 text-gray-700">
      <div className=" px-3 shadow rounded-md bg-white">
        <h2 className="py-6 font-bold text-2xl">Zona Atlantico - Magdalena</h2>
        <div>
          <select name="dept" id="departamentos">
            <option value="bq">Barranquilla</option>
          </select>
          <hr />
          <div className="pt-2">
            {dataJson.map((item) => (
              <CardGas item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
      <div className=" ml-3 bg-white pb-4 shadow rounded-lg">
        <Image src={imgMaps} alt="imagen maps" className="rounded-t-md" />
        <div className="flex justify-between px-3 pt-4">
          <h2 className="font-semibold text-2xl w-40">PDS Estacion calle 84</h2>
          <div className="flex flex-col gap-1">
            <button className="py-1 px-3 w-14 text-xs self-end bg-green-100 text-green-500 rounded-md">
              Activo
            </button>
            <button className="py-1 px-4 text-sm text-white bg-blue-500 rounded-2xl">
              ver cartera
            </button>
          </div>
        </div>
        <div className="flex justify-between px-3 mt-2">
          <div className="text-left">
            <h6 className="text-xs font-semibold">Contrato N°</h6>
            <span>SC-22-192</span>
          </div>
          <div className="text-right">
            <h6 className="text-xs font-semibold">
              Consumo traído al corte de
            </h6>
            <span>30/10/23</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 px-3 mt-2">
          <div className="shadow p-2 rounded-lg">
            <h4 className="text-gray-500 font-semibold">
              Progreso de cumplimiento
            </h4>
            <span className="font-bold">64%</span>
          </div>
          <div className="shadow p-2 rounded-lg">
            <h4 className="text-gray-500 font-semibold">
              Progreso de reaseguramiento
            </h4>
            <span className="font-bold">64%</span>
            <div className="flex gap-2 mt-1 text-xs">
              <h4>Finalización del contrato</h4>
              <span className="font-bold">01/01/25</span>
            </div>
          </div>
          <div className="flex shadow rounded-lg">
            <span className="text-xs shadow rounded-s-lg flex-grow border-blue-200 border-solid border-2 text-blue-500 bg-blue-200 text-center">
              Por tiempo
            </span>
            <span className="text-xs shadow  rounded-e-lg flex-grow border-blue-200 border-solid border-2 text-blue-500 text-center">
              Por Volumen
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
