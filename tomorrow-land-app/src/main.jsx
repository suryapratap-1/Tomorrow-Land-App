import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App'
import { Home, Men, Women, Kids, Accessories, Art } from './pages'


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<App />}>
          <Route path='' element={<Home />} />
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='kids' element={<Kids />} />
          <Route path='accessories' element={<Accessories />} />
          <Route path='art' element={<Art />} />
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
