import express from 'express'
import db from '../config/Database.js'
const router = express.Router()

router.post('/', (req, res) => {
   // Extract data from request body
   const { jam_masuk, jam_keluar, jenis_kendaraan } = req.body

   // Calculate duration in hours
   const durationHours = calculateDurationInHours(jam_masuk, jam_keluar)

   // Calculate price based on vehicle type and duration
   let price
   switch (jenis_kendaraan) {
      case 'mobil':
         price = durationHours * 5 // Example: $5 per hour for cars
         break
      case 'motor':
         price = durationHours * 3 // Example: $3 per hour for motorcycles
         break
      default:
         return res.status(400).json({ error: 'Invalid vehicle type' })
   }

   // Insert parking data into MySQL
   const sql =
      'INSERT INTO data_pengendara (jam_masuk, jam_keluar, jenis_kendaraan, duration_hours, price) VALUES (?, ?, ?, ?, ?)'
   const values = [jam_masuk, jam_keluar, jenis_kendaraan, durationHours, price]
   db.query(sql, values, (err, result) => {
      if (err) {
         console.error('Error inserting parking data:', err)
         return res.status(500).json({ error: 'Failed to store parking data' })
      }
      console.log('Parking data inserted:', result)
      res.json({ price })
   })
})

export default router
