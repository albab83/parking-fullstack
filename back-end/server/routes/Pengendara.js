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

   const values = req.body

   db.query(q, values, (err, Data) => {
      if (err) return res.json(err)
      return res.json('create success' + Data)
   })
})

router.delete('/(:id)', function (req, res) {
   let id = req.params.id

   db.query(
      `SELECT * FROM data_pengendara WHERE id_pengendara = ${id}`,
      function (err, rows) {
         if (err) {
            return res.status(500).json({
               status: false,
               message: 'Internal Server Error',
            })
         }

         // if post not found
         if (rows.length <= 0) {
            return res.status(404).json({
               status: false,
               message: 'Data Post Not Found!',
            })
         }
         // if post found
         else {
            // Perform deletion query
            db.query(
               `DELETE FROM data_pengendara WHERE id_pengendara = ${id}`,
               function (err) {
                  if (err) {
                     return res.status(500).json({
                        status: false,
                        message: 'Failed to delete data',
                     })
                  }
                  // Successful deletion
                  return res.status(200).json({
                     status: true,
                     message: 'Data Post Deleted Successfully',
                  })
               }
            )
         }
      }
   )
})

export default router
