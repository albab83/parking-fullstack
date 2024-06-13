import express from 'express'
import db from '../config/Database.js'
const Router = express.Router()

Router.post('/', (req, res) => {
   const { nama, email, password } = req.body

   // Basic validation
   if (!nama || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' })
   }

   // Check if username or email already exists
   db.query(
      'SELECT * FROM admin WHERE nama = ? OR email = ?',
      [nama, email],
      (err, results) => {
         if (err) {
            throw err
         }

         if (results.length > 0) {
            // Duplicate found
            if (results[0].email === email) {
               return res.status(400).json({ error: 'Username already taken' })
            } else {
               return res
                  .status(400)
                  .json({ error: 'Email already registered' })
            }
         } else {
            // Insert user into database
            db.query(
               'INSERT INTO admin (nama, email, password) VALUES (?, ?, ?)',
               [nama, email, password],
               (err) => {
                  if (err) {
                     throw err
                  }
                  res.status(200).json({ message: 'Registration successful' })
               }
            )
         }
      }
   )
})

export default Router
