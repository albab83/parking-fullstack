import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
const TableArchive = () => {
   const [dataArchive, setDataArchive] = useState([])

   useEffect(() => {
      fetch('http://localhost:3000/dataArchive')
         .then((mang) => {
            return mang.json()
         })
         .then((datas) => {
            setDataArchive(datas)
         })
         .catch((err) => {
            if (err.name === 'AbortError') {
               console.log('fetch aborted.')
            }
         })
   }, [])

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
         <div className="bg-slate-800 grid grid-cols-1 text-white rounded-lg w-full overflow-x-auto ">
            <div className="flex justify-center items-center w-full">
               <h1 className="font-bold text-xl py-3">Daftar Archive</h1>
            </div>
            <div className="w-full py-3 px-3">
               <input
                  className="w-full p-3 rounded-lg text-black"
                  type="search"
                  placeholder="Search"
               />
            </div>
            <table className="w-full px-5">
               <thead className="bg-black sticky top-0">
                  <tr className="w-full">
                     <th className="py-3">Nama</th>
                     <th>Jenis Kendaraan</th>
                     <th>No Kendaraan</th>
                     <th>Jam Masuk</th>
                     <th>Jam Keluar</th>
                     <th>Pendapatan</th>
                  </tr>
               </thead>
               <tbody className="text-center overflow-y-auto">
                  {dataArchive.map((archive, id) => (
                     <tr key={id} className="border-b">
                        <td className="py-3">{archive.nama}</td>
                        <td className="py-3">{archive.jenis}</td>
                        <td className="py-3">{archive.no_kendaraan}</td>
                        <td className="py-3">{archive.jam_masuk}</td>
                        <td className="py-3">{archive.jam_keluar}</td>
                        <td className="py-3">{archive.pendapatan}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </motion.div>
   )
}

export default TableArchive
