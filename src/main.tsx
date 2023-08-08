import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ventas from './routes/ventas'
import home from './routes/home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import compras from './routes/compras'
import Insumos from './routes/insumos'

const router = createBrowserRouter ([

  {
    path: '/',
    element: home(),
    errorElement: <h1>Error :c</h1>
  },
  {
    path: '/ventas',
    element: ventas()
  },
  {
    path: '/compras',
    element: compras()
  },
  {
    path: '/insumos',
    element: Insumos()
  },
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
