// import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
