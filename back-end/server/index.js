import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import Pengendara from './routes/Pengendara.js'

const db = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'parking',
})
export default db

db.connect((err) => {
   if (err) throw err
   console.log('mysql connected')
})

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
   res.json({
      status: 200,
      message: 'data pengendara',
   })
})

app.use('/data_pengendara', Pengendara)

app.listen(3000, () => console.log('server running di port ' + 3000))
