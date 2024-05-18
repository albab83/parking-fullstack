import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Page from './pages/page'
import ArchivePage from './pages/archive-page'
import LoginPage from './pages/login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RegisterPage from './pages/register'

const router = createBrowserRouter([
   {
      path: '/',
      element: <LoginPage />,
   },
   {
      path: '/register',
      element: <RegisterPage />,
   },
   {
      path: '/page',
      element: <Page />,
   },
   {
      path: '/archive-page',
      element: <ArchivePage />,
   },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
)
