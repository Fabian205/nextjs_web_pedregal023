import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function Coprop() {
  // Obtengo los datos pasados desde loginCoprop
  /* const router = useRouter();
  const { email } = router.query;
  const { casa } = router.query; */

  return (
    <div className="bg-gray-800 mt-10 h-screen bg-cover bg-no-repeat bg-center bg-fixed flex-col text-center">
      <h1 className="text-white text-xl pt-10 pb-10">
        C O P R O P I E T A R I O S
      </h1>
      <h1 className="text-white text-xl pt-7 pb-3">BIENVENIDO</h1>
      <div className="container mx-auto bg-gray-900 p-4 mb-16 w-1/2 ">
        <p className="text-white">NOMBRE</p>
        <p className="text-white">CASA</p>
      </div>

      <p className="text-teal-600 italic">
        {"Menú"}
      </p>

      <div className="pb-2">
        <Link legacyBehavior href="/coprop/estadoscuentacoprop/">
          <a className="dark:text-gray-400 italic underline hover:text-teal-400">
            Estados de Cuenta
          </a>
        </Link>
      </div>
      <div className="pb-2">
        <Link legacyBehavior href="/coprop/consultapagoscoprop">
          <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
            Consulta de Pagos
          </a>
        </Link>
      </div>
      <div className="pb-2">
        <Link legacyBehavior href="/coprop/historialpropiedadcoprop">
          <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
            Historial de la propiedad
          </a>
        </Link>
      </div>
      <div className="pb-2">
        <Link legacyBehavior href="/coprop/documentoscoprop">
          <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
            Documentos
          </a>
        </Link>
      </div>
      <div className="pb-2">
        <Link legacyBehavior href="/coprop/acercadecoprop">
          <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
            Acerca de
          </a>
        </Link>
      </div>
      {/* <div className="pb-2">
        <Link legacyBehavior href="/admin/registroexpensasadmin">
          <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
            Registro de Expensas
          </a>
        </Link>
      </div>
      <div className="pb-2">
        <Link legacyBehavior href="/admin/edicionexpensasadmin">
          <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
            Edición de Expensas
          </a>
        </Link>
      </div> */}
    </div>
  );
}

export default Coprop;