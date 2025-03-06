import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import { LoginPage,signuppage,CreateProduct } from './Routes/Routes'
function App() {
  

  return (
   <>
   <Routes>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/createProduct' element={<CreateProduct/>}/>
   </Routes>
   </>
  )
}

export default App
