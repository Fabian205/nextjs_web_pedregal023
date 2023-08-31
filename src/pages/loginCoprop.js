import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import axiosInstance from "../../axiosInstance";
import { useRouter } from "next/router";


function LoginCoprop() {
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
          //onSubmit={handleSubmit}
          className="shadow-md rounded px-8 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block font-medium text-gray-400 mb-1"
            >
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="on"
              //placeholder="Email"
              //value={credentials.email}
              //onChange={handleChange}
              //ref={inputName}
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
                //type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                //placeholder="Password"
                //value={credentials.password}
                //onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:sahdow-outline"
                required
              />
              <button
                type="button"
                //onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-3 transform -translate-y-1/2"
              >
                <img
                  //src={showPassword ? "/password.png" : "/showpass.png"}
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
              Ingresar
            </button>
            {/* <p className="text-teal-600 italic">
              {"Don't Have an Account? "}
              <Link legacyBehavior href="/register">
                <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                  Register
                </a>
              </Link>
            </p> */}
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginCoprop