import Image from "next/image";
import Link from "next/link";
import User from "@/components/User";

//Import image
import icoConsolidado from "@/image/ico-contribute.svg";
import imgNotification from "@/image/img-notification.svg";

export default function Header() {
  return (
    <>
      <header className="bg-white">
        <nav className="py-2 px-5 shadow flex justify-between">
          <div className="flex items-center">
            <Link href="#" className="font-semibold text-2xl text-blue-600">
              CRM Petromil
            </Link>
          </div>
          <div className="text-gray-700 flex gap-7 items-center">
            <Link
              href="#"
              className="flex items-center gap-2 shadow py-1 px-2 rounded-md"
            >
              <Image src={icoConsolidado} alt="imagen consolidado" />
              <span>Consolidado</span>
              <div className=" flex justify-center items-center w-8 h-8 bg-rose-500 rounded-full">
                <span className="text-white">3</span>
              </div>
            </Link>
            <div className="p-1 shadow rounded-lg">
              <Image src={imgNotification} alt="imagen notificacion" />
            </div>
            <User />
          </div>
        </nav>
      </header>
    </>
  );
}
