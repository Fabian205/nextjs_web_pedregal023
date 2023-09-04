import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import axiosInstance from "../../axiosInstance";
import { useRouter } from "next/router";
import verifyCookie from "@/verifyCookie";


export default function LoginAdmin() {

  
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputName = useRef(null);

  useEffect(() => {
    inputName.current.focus();
  }, []);

  const [credentials, setCredentials] = useState({
    user: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    //console.log(credentials.email, credentials.password);
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const salir = async (e) => {
    e.preventDefault();
    /* const response = await axios.post("api/auth/signout");
    if (response.status === 200) {
      router.push("/");
    } */
    await axiosInstance
      .post("api/auth/signout")
      .then((response) => {
        // Manejar la respuesta exitosa
        router.push("/loginAdmin");
        alert("Logout succesfully!");
        //console.log(response.data);
      })
      .catch((error) => {
        // El error 401 será interceptado y manejado de manera personalizada
        console.error(error);
        handleClearInput();
      });
  };

  const verificaCookie = () => {
    alert("verificaCookie");
  };

  const handleClearInput = () => {
    setCredentials({
      user: "",
      password: "",
    });
    inputName.current.focus();
  };

  /* const datos = {
    user: credentials.user,
    password: credentials.password
  }; */

  const handleSubmit = async (e) => {
    e.preventDefault();
    /* const response = await axios.post("api/auth/signin", credentials);

    if (response.status === 200) {
      router.push("/home");
    }
    console.log("response de login", response); */

    //console.log(credentials);
    await axiosInstance
      .post("api/auth/signin", credentials)
      .then((response) => {
        // Manejar la respuesta exitosa
        router.push("/admin");
        //console.log(datos);
        /* router.push({
          pathname: "admin",
          query: datos
        }); */
      })
      .catch((error) => {
        // El error 401 será interceptado y manejado de manera personalizada
        console.error(error);
        handleClearInput();
      });
  };
 
  return (
    <div className="h-screen">
      {/* <div className="bg-gray-700 mt-10  bg-cover bg-no-repeat bg-center bg-fixed flex items-center relative">
        <h1 className="text-white text-xl">Administracion del conjunto</h1>
      </div> */}
      <div className="max-w-md mx-auto h-auto bg-gray-800 rounded-lg shadow-md m-20 ">
        <h2 className="text-2xl font-bold mb-10 pt-10 text-center text-gray-400">
          Login para Administración
        </h2>
        <form
          onSubmit={handleSubmit}
          className="shadow-md rounded px-8 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="user"
              className="block font-medium text-gray-400 mb-1"
            >
              User:
            </label>
            <input
              type="text"
              id="user"
              name="user"
              autoComplete="on"
              placeholder="User"
              value={credentials.user}
              onChange={handleChange}
              ref={inputName}
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:sahdow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block font-medium text-gray-400 mb-1"
            >
              Password:
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:sahdow-outline"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-3 transform -translate-y-1/2"
              >
                <img
                  src={showPassword ? "/password.png" : "/showpass.png"}
                  alt="Toggle Password"
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-600 text-white rounded py-2 px-4 hover:bg-blue-800 mt-8"
            >
              Login
            </button>
            <button
              onClick={salir}
              className="bg-blue-600 text-white rounded py-2 px-4 hover:bg-blue-800 mt-8 ml-12"
            >
              Logout
            </button>
            <p className="text-teal-600 italic pt-6">
              {"Ya estas logeado?, Ingreso rápido"}
            </p>
          </div>
          <div className="flex flex-col">
            {/* <button
              onClick={verificaCookie}
              className="bg-blue-600 text-white rounded py-2 px-4 hover:bg-blue-800 mt-8 ml-12"
            >
              Estados de Cuenta
            </button> */}
            <Link legacyBehavior href="/admin/estadoscuentaadmin">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                Estados de Cuenta
              </a>
            </Link>
            <Link legacyBehavior href="/admin/consultapagosadmin">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                Consulta de Pagos
              </a>
            </Link>
            <Link legacyBehavior href="/admin/consultaexpensasadmin">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                Consulta de Expensas
              </a>
            </Link>
            <Link legacyBehavior href="/admin/consultahistorialadmin">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                Consulta Historial
              </a>
            </Link>
            <Link legacyBehavior href="/admin/estadocuentageneraladmin">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                Estado de Cuenta General
              </a>
            </Link>
            <Link legacyBehavior href="/admin/registroexpensasadmin">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                Registro de Expensas
              </a>
            </Link>
            <Link legacyBehavior href="/admin/edicionexpensasadmin">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                Edición de Expensas
              </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

