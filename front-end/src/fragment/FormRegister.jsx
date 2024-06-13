import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Swal from 'sweetalert2'
import axios from 'axios'
import { Link } from 'react-router-dom'

const FormRegister = () => {
   const initialValues = {
      nama: '',
      email: '',
      password: '',
   }

   const validationSchema = Yup.object({
      nama: Yup.string().required('Username is required'),
      email: Yup.string()
         .email('Invalid email address')
         .required('Email is required'),
      password: Yup.string().required('Password is required'),
   })

   const handleSubmit = async (values, { setSubmitting, resetForm }) => {
      try {
         const response = await axios.post(
            'http://localhost:5000/register',
            values
         )
         Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Registration successful',
         })
         resetForm()
         setSubmitting(false)
      } catch (error) {
         console.log(error)
         Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Registration failed',
         })
         setSubmitting(false)
      }
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
            <h1 className="text-2xl font-bold mb-4">Register</h1>
            <Formik
               initialValues={initialValues}
               validationSchema={validationSchema}
               onSubmit={handleSubmit}
            >
               {({ isSubmitting }) => (
                  <Form>
                     <div className="mb-4">
                        <Field
                           className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                           type="text"
                           placeholder="Nama"
                           name="nama"
                        />
                        <ErrorMessage
                           name="nama"
                           component="div"
                           className="error-message"
                        />
                     </div>
                     <div className="mb-4">
                        <Field
                           className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                           placeholder="Email Address"
                           type="email"
                           name="email"
                        />
                        <ErrorMessage
                           name="email"
                           component="div"
                           className="error-message"
                        />
                     </div>
                     <div>
                        <Field
                           className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                           placeholder="Password"
                           type="password"
                           name="password"
                        />
                        <ErrorMessage
                           name="password"
                           component="div"
                           className="error-message"
                        />
                     </div>
                     <div className="mt-4 flex justify-between font-semibold text-sm">
                        <div className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                           <p className="font-normal">
                              Sudah Punya Akun?{' '}
                              <Link to={'/login'}>
                                 <span className="text-blue-600 font-bold hover:underline">
                                    Login
                                 </span>
                              </Link>
                           </p>
                        </div>
                     </div>
                     <button
                        className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
                        type="submit"
                        disabled={isSubmitting}
                     >
                        Register
                     </button>
                  </Form>
               )}
            </Formik>
         </div>
      </section>
   )
}

export default FormRegister
