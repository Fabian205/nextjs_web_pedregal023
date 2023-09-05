import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function Admin() {
  // Obtengo los datos pasados desde loginAdmin
  const router = useRouter();
  const { nombre } = router.query;
  const { cargo } = router.query;

  return (
    <div className="bg-gray-800 mt-10 h-screen bg-cover bg-no-repeat bg-center bg-fixed flex-col text-center">
      <h1 className="text-white text-xl pt-20 pb-10">
        A D M I N I S T R A C I O N
      </h1>
      <h1 className="text-white text-xl pt-10 pb-10">BIENVENIDO</h1>
      <div className="bg-gray-900 border border-gray-200 shadow-md p-3 mb-10">
        <p>Nombre: {nombre}</p>
        <p>Cargo: {cargo}</p>
      </div>
      <div className="pb-2">
        <Link legacyBehavior href="/admin/estadoscuentaadmin">
          <a className="dark:text-gray-400 italic underline hover:text-teal-400">
            Estados de Cuenta
          </a>
        </Link>
      </div>
      <div className="pb-2">
        <Link legacyBehavior href="/admin/consultapagosadmin">
          <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
            Consulta de Pagos
          </a>
        </Link>
      </div>
      <div className="pb-2">
        <Link legacyBehavior href="/admin/consultaexpensasadmin">
          <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
            Consulta de Expensas
          </a>
        </Link>
      </div>
      <div className="pb-2">
        <Link legacyBehavior href="/admin/consultahistorialadmin">
          <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
            Consulta del Historial
          </a>
        </Link>
      </div>
      <div className="pb-2">
        <Link legacyBehavior href="/admin/estadocuentageneraladmin">
          <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
            Estado de Cuenta General
          </a>
        </Link>
      </div>
      <div className="pb-2">
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
      </div>
    </div>
  );
}

export default Admin;
