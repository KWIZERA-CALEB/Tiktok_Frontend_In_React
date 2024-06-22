import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

// import pages
import Upload from './Pages/Upload'
import Home from './Pages/Home'

// toast
import toast from 'react-hot-toast'

// import link
import { Link } from 'react-router-dom'






function App() {
  
  return (
    <>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/upload' element={<Upload />}></Route>
        </Routes>

    </>
  )
}

export default App
