import React from "react";
import Button from "@/components/Button";

function ConsultaPagosAdmin() {
  return (
    <div className="bg-gray-700 h-screen bg-cover bg-no-repeat bg-center bg-fixed flex flex-col mt-20 items-center relative">
      <h1 className="text-white text-xl">ADMINISTRADOR</h1>
      <h1 className="text-white text-xl">CONSULTA DE PAGOS</h1>
      <div>
        <Button link="/admin" text="«« Administración" />
      </div>
      <div className="flex gap-5 items-center justify-center">
        <div className="bg-green-700 w-[100px] h-[2px]"></div>
        <h1 className="text-gray-800 uppercase text-2xl">
          PÁGINA EN CONSTRUCCIÓN
        </h1>
        <div className="bg-green-700 w-[100px] h-[2px]"></div>
      </div>
    </div>
  );
}

export default ConsultaPagosAdmin;
