const express = require('express')

const PORT = process.env.PORT || 3001

const app = express()

const mysql = require('mysql2')
const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'parking',
})

app.use(express.json())
connection.connect(function (error) {
   if (!!error) {
      console.log(error)
   } else {
      console.log('Koneksi Berhasil!')
   }
})

module.exports = connection

app.post('/pengendara', async (req, res) => {
   try {
      const { nama_pengendara, jenis_kendaraan, no_kendaraan, jam_masuk } =
         req.body
      const [{ insertId }] = await connection.promise().query(
         `INSERT INTO users (nama_pengendara,jenis_kendaraan, no_kendaraan, jam_masuk) 
           VALUES (?, ?,?)`,
         [nama_pengendara, jenis_kendaraan, no_kendaraan, jam_masuk]
      )
      res.status(202).json({
         message: 'User Created',
      })
   } catch (err) {
      res.status(500).json({
         message: err,
      })
   }
})

app.get('/pengendara', async (req, res) => {
   try {
      const data = await connection
         .promise()
         .query(`SELECT *  from data_pengendara;`)
      res.status(202).json({
         pengendara: data[0],
      })
   } catch (err) {
      res.status(500).json({
         message: err,
      })
   }
})

app.listen(PORT, () => {
   console.log(`Server listening on ${PORT}`)
})
