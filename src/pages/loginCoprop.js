import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import axiosInstance from "../../axiosInstance";
import { useRouter } from "next/router";


function LoginCoprop() {

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
      .post("api/auth/signoutcopro")
      .then((response) => {
        // Manejo la respuesta exitosa
        router.push("/loginCoprop");
        alert("Logout succesfully!");
        //console.log(response.data);
      })
      .catch((error) => {
        // El error 401 será interceptado y manejado de manera personalizada
        console.error(error);
        handleClearInput();
      });
  };

  const handleClearInput = () => {
    setCredentials({
      user: "",
      password: "",
    });
    inputName.current.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    /* const response = await axios.post("api/auth/signin", credentials);

    if (response.status === 200) {
      router.push("/home");
    }
    console.log("response de login", response); */

    //console.log(credentials);
    await axiosInstance
      .post("api/auth/signincopro", credentials)
      .then((response) => {
        // Manejar la respuesta exitosa y envio los datos del user logeado
        router.push(
          {
            pathname: '/coprop',
            //query: { email: response.data.email, casa: response.data.casa},
          }
        );
        //console.log(response.data);
        //console.log("D A T A", response.data.email, response.data.casa);        
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
        <h1 className="text-white text-xl">Copropietarios del Conjunto</h1>
      </div> */}
      <div className="max-w-md mx-auto h-auto bg-gray-800 rounded-lg shadow-md m-20 ">
        <h2 className="text-2xl font-bold mb-10 pt-10 text-center text-gray-400">
          Login para Copropietarios
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
                type={showPassword ? 'text' : 'password'}
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
            {/* <button
              onClick={salir}
              className="bg-blue-600 text-white rounded py-2 px-4 hover:bg-blue-800 mt-8 ml-12"
            >
              Logout
            </button>
            <p className="text-teal-600 italic pt-6">
              {"Ya estas logeado?, Ingreso rápido"}
            </p> */}
          </div>
          {/* <div className="flex flex-col">
            <Link legacyBehavior href="/coprop/estadoscuentacoprop">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                Estados de Cuenta
              </a>
            </Link>
            <Link legacyBehavior href="/coprop/consultapagoscoprop">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                Consulta de Pagos
              </a>
            </Link>
            <Link legacyBehavior href="/coprop/historialpropiedadcoprop">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                Historial de la propiedad
              </a>
            </Link>
            <Link legacyBehavior href="/coprop/documentoscoprop">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                Documentos
              </a>
            </Link>
            <Link legacyBehavior href="/coprop/acercadecoprop">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                Acerca de
              </a>
            </Link>            
          </div> */}
        </form>
      </div>
    </div>
  )
}

export default LoginCoprop