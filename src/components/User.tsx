import Image from "next/image";

//Import image
import imgCarlota from "@/image/img-carlota.svg";

export default function User() {
  return (
    <>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <h4 className="font-semibold">Carlota Marquez</h4>
          <span className="text-xs">Administrador</span>
        </div>
        <div>
          <Image src={imgCarlota} alt="imagen usuario"/>
        </div>
      </div>
    </>
  );
}
