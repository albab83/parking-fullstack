import React from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'

const FormRegister = () => {
   return (
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0          md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
         <div className="md:w-1/3 max-w-sm">
            <img
               src="https://img.freepik.com/free-vector/isometric-colored-parking-composition-with-two-properly-parked-cars-standing-roadside-parking-lot_1284-63164.jpg?t=st=1713630477~exp=1713634077~hmac=e27d2b3e316a3a924aee8aaa2229d344bafbe56f5a73ade30327c8d068c56e43&w=740"
               alt="Sample image"
            />
         </div>
         <div className="md:w-1/3 max-w-sm">
            <form>
               <div className="text-center mb-10 md:text-left">
                  <label className="mr-1 font-bold text-3xl">
                     Register For Admin
                  </label>
               </div>

               <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                  type="text"
                  placeholder="Username"
                  name="username"
               />
               <input
                  className="text-sm w-full px-4 py-2 mt-4 border border-solid border-gray-300 rounded"
                  type="text"
                  placeholder="Email Address"
                  name="email"
               />
               <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                  type="password"
                  placeholder="Password"
                  name="password"
               />
               <div className="mt-4 flex justify-between font-semibold text-sm">
                  <div className="flex text-slate-500">
                     <p className="font-normal">
                        Sudah Punya Akun?{' '}
                        <Link to={'/'}>
                           <span>
                              <a
                                 className="text-blue-600 font-bold hover:underline"
                                 href=""
                              >
                                 Login
                              </a>
                           </span>{' '}
                        </Link>
                     </p>
                  </div>
               </div>
               <div className="text-center md:text-left">
                  <Link to="/page">
                     <button
                        className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                        type="submit"
                     >
                        Register
                     </button>
                  </Link>
               </div>
               <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                  <a
                     className="text-red-600 hover:underline hover:underline-offset-4"
                     href="#"
                  ></a>
               </div>
            </form>
         </div>
      </section>
   )
}

export default FormRegister
