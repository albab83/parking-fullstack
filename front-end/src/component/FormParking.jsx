import { motion } from 'framer-motion'
import { useFormik } from 'formik'
import axios from 'axios'

const validate = (values) => {
   const errors = {}
   if (!values.nama) {
      errors.nama = 'nama harus terisi'
   } else if (values.nama.length > 15) {
      errors.nama = 'Tidak boleh lebih dari 15 karakter'
   }

   if (!values.jenis) {
      errors.jenis = 'Tolong isi Jenis'
   }

   if (!values.no_kendaraan) {
      errors.no_kendaraan = 'Tolong isi Nomor Kendaraan'
   }

   return errors
}

const FormParking = () => {
   const date = new Date()
   const showTime = `${date.getHours()}:${date.getMinutes()}`
   const showDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`

   const formik = useFormik({
      initialValues: {
         nama: '',
         jenis: '',
         jam_masuk: showTime + ' ' + showDate,
         mulai_parkir: '',
         no_kendaraan: '',
      },
      validate,
      onSubmit: async (Data) => {
         console.log(Data)

         const checkDataPengendara = (serverUsers, Data) => {
            const user = serverUsers.find(
               (dataPengendara) =>
                  dataPengendara.no_kendaraan === Data.no_kendaraan
            ) // extract the email from the formData
            if (user) return user
         }

         const user = await axios
            .get('http://localhost:3000/dataPengendara')
            .then((res) => checkDataPengendara(res.data, Data))

         if (user)
            alert('data sudah ada') // do whatever you want here with the existence user store.
         else
            await axios.post('http://localhost:3000/dataPengendara', Data),
               {
                  headers: {
                     'Content-Type': 'application/json',
                  },
               }

         formik.resetForm({
            values: { nama: '', jenis: '', no_kendaraan: '' },
         })
      },
   })

   const handleFormInput = (e) => {
      formik.setFieldValue(e.target.name, e.target.value)
   }

   return (
      <motion.div
         initial={{ opacity: 0, scale: 0 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{
            duration: 2,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
         }}
      >
         <div className="bg-slate-800 grid grid-cols-1 p-5 text-white rounded-lg">
            <h1 className="text-center mb-5 w-full font-bold text-xl">
               Form Parking
            </h1>
            <form className=" flex flex-col" onSubmit={formik.handleSubmit}>
               <div className="mb-3">
                  <input
                     className="p-2 rounded-md w-full text-black"
                     placeholder="Masukan Nama"
                     type="text"
                     name="nama"
                     onChange={handleFormInput}
                     value={formik.values.nama}
                  />

                  {formik.errors.nama ? (
                     <div className="text-red-500 mt-1 text-sm">
                        {formik.errors.nama}
                     </div>
                  ) : null}
               </div>

               <div className="mb-3">
                  <select
                     className=" p-2 rounded-md w-full font-semibold text-slate-400"
                     id="kendaraan"
                     name="jenis"
                     onChange={handleFormInput}
                  >
                     <option value="mobil">Mobil</option>
                     <option value="motor">Motor</option>
                  </select>

                  {formik.errors.jenis ? (
                     <div className="text-red-500 text-sm mt-1">
                        {formik.errors.jenis}
                     </div>
                  ) : null}
               </div>

               <div className="mb-3">
                  <input
                     className="p-2 rounded-md w-full text-black"
                     type="text"
                     placeholder="Masukan No Kendaraan"
                     name="no_kendaraan"
                     value={formik.values.no_kendaraan}
                     onChange={handleFormInput}
                  />
                  {formik.errors.no_kendaraan ? (
                     <div className="text-red-500 mt-1 text-sm">
                        {formik.errors.no_kendaraan}
                     </div>
                  ) : null}
               </div>
               <button
                  className="bg-blue-500 p-2 my-2 w-1/2 mx-auto rounded-md text-white font-semibold"
                  type="submit"
               >
                  Masuk
               </button>
            </form>
         </div>
      </motion.div>
   )
}

export default FormParking
