import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router' 
import './global.css'
import HomePage from './pages/homepage'
import Headphones from './pages/headphones' 

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage /> ,
  },
  {
    path: '/headphones',
    element: <Headphones /> ,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
