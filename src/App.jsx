import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Manage from './pages/Manage';
import Add from './pages/Add';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/manage/:id' element={<Manage />} />
        <Route path='/add-employee' element={<Add />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
