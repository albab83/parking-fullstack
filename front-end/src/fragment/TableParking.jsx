import { useEffect, useState } from 'react'
import { BiExit } from 'react-icons/bi'
import { motion } from 'framer-motion'
import axios from 'axios'

const TableParking = () => {
   const [dataPengendara, setDataPengendara] = useState([])

   const apiPengendara = import.meta.env.VITE_API_PENGENDARA

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(`${apiPengendara}data_pengendara`)
            setDataPengendara(response.data)
         } catch (error) {
            console.error('Error fetching data:', error)
         }
      }

      fetchData()
   })

   const handleDelete = async (id) => {
      console.log(id)
      try {
         // Mengirim permintaan DELETE ke backend
         await axios.delete(`${apiPengendara}data_pengendara/${id}`, {
            headers: {
               'Content-Type': 'application/json',
            },
         })

         // Jika penghapusan berhasil, perbarui UI secara lokal
         // Misalnya, hapus item dari daftar atau re-fetch data dari server
         // Di sini Anda bisa memanggil fungsi untuk memperbarui tampilan
         // Contoh:
         // Fungsi fetchData() akan memperbarui data yang ditampilkan di UI
      } catch (error) {
         // Tangani kesalahan jika permintaan gagal
         console.error('Error deleting data:', error)
      }
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
         <div className="bg-slate-800 grid grid-cols-1 p-5 text-white rounded-lg overflow-x-scroll">
            <div className="col-span-1 my-2 text-center">
               <h1 className="font-bold text-xl">Daftar Pengendara Parkir</h1>
            </div>
            <div className="w-full flex py-4 px-3">
               <input
                  className="w-full p-3 rounded-lg text-black"
                  type="search"
                  placeholder="Search"
               />
               <button className="ms-5 bg-indigo-600 p-3 rounded-md hover:bg-indigo-500">
                  Search
               </button>
            </div>
            <table className=" col-span-1">
               <thead className="bg-black sticky top-0 w-full">
                  <tr>
                     <th className="py-5">Nama</th>
                     <th>Jenis Kendaraan</th>
                     <th>No Kendaraan</th>
                     <th>Jam Masuk</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody id="data-parkir" className="text-center">
                  {Array.isArray(dataPengendara) &&
                     dataPengendara.map((pengendara, id) => (
                        // Render table rows here
                        <tr key={id} className="border-b">
                           <td className="py-3">{pengendara.nama}</td>
                           <td className="py-3">
                              {pengendara.jenis_kendaraan}
                           </td>
                           <td className="py-3">{pengendara.no_kendaraan}</td>
                           <td className="py-3">{pengendara.jam_masuk}</td>
                           <td className="py-3">
                              <button
                                 onClick={() =>
                                    handleDelete(pengendara.id_pengendara)
                                 }
                                 className="bg-red-600 p-2 rounded-md hover:bg-red-500"
                              >
                                 <BiExit className="text-white" />
                              </button>
                           </td>
                        </tr>
                     ))}
               </tbody>
            </table>
         </div>
      </motion.div>
   )
}

export default TableParking
