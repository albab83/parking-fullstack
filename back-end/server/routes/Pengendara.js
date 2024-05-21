import express from 'express'
import db from '../index.js'
const router = express.Router()

router.get('/', (req, res) => {
   const q = 'SELECT * FROM data_pengendara'

   db.query(q, (err, data) => {
      if (err) return res.json(err)
      return res.json(data)
   })
})

router.post('/', (req, res) => {
   const q = 'INSERT INTO data_pengendara SET ?'

   const values = {
      id_pengendara: req.body.id_pengendara,
      nama: req.body.nama,
      jenis_kendaraan: req.body.jenis_kendaraan,
      no_kendaraan: req.body.no_kendaraan,
      jam_masuk: req.body.jam_masuk,
      jam_keluar: req.body.jam_keluar,
   }
   db.query(q, [values], (err, data) => {
      if (err) return res.json(err)
      return res.json('create success' + data)
   })
})

export default router
