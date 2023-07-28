import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<h1 class="text-3xl font-bold underline">
    Hello Home!
  </h1>} />
      <Route path='/about' element={<h1 class="text-3xl font-bold underline">Hello About</h1>} />
    </Routes>
    </>
  )
}

export default App