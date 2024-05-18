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

app.listen(PORT, () => {
   console.log(`Server listening on ${PORT}`)
})
