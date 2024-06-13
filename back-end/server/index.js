import express from 'express'
import db from './config/Database.js'
import cors from 'cors'
import Pengendara from './routes/Pengendara.js'
import Calculate from './routes/calculate.js'

const app = express()
app.use(cors())
app.use(express.json())

db.connect()

app.get('/', (req, res) => {
   res.json({
      status: 200,
      message: 'selamat datang di server',
   })
})

// Routes

app.use('/data_pengendara', Pengendara)
app.use('/calculate', Calculate)

app.listen(5000, () => {
   console.log('server berjalan di port 5000')
})
