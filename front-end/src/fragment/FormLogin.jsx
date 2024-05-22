import React from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'

const Login = (props) => {
   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
      },

      onSubmit: () => {
         fetch('http://localhost:3000/admin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
               email: formik.values.email,
               password: formik.values.password,
            }),
         })
         formik.setFieldValue('email', '')
         formik.setFieldValue('password', '')
      },
   })

   const handleFormInput = (e) => {
      formik.setFieldValue(e.target.name, e.target.value)
   }
   return (
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0          md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
         <div className="md:w-1/3 max-w-sm">
            <img
               src="https://img.freepik.com/free-vector/isometric-colored-parking-composition-with-two-properly-parked-cars-standing-roadside-parking-lot_1284-63164.jpg?t=st=1713630477~exp=1713634077~hmac=e27d2b3e316a3a924aee8aaa2229d344bafbe56f5a73ade30327c8d068c56e43&w=740"
               alt="Sample image"
            />
         </div>
         <div className="md:w-1/3 max-w-sm">
            <form onSubmit={formik.handleSubmit}>
               <div className="text-center mb-10 md:text-left">
                  <label className="mr-1 font-bold text-3xl">
                     Login For Admin
                  </label>
               </div>

               <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                  type="text"
                  placeholder="Email Address"
                  name="email"
                  onChange={handleFormInput}
                  value={formik.values.email}
               />
               <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleFormInput}
                  value={formik.values.password}
               />
               <div className="mt-4 flex justify-between font-semibold text-sm">
                  <div className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                     <p className="font-normal">
                        Belum Punya Akun?{' '}
                        <Link to={'/register'}>
                           <span>
                              <a className="text-blue-600 font-bold hover:underline">
                                 Register
                              </a>
                           </span>
                        </Link>
                     </p>
                  </div>
                  <a
                     className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                     href="#"
                  >
                     Forgot Password?
                  </a>
               </div>
               <div className="text-center md:text-left">
                  <Link to="/page">
                     <button
                        onClick={props.onClick}
                        className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                        type="submit"
                     >
                        Login
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

export default Login
