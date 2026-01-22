import './App.css'

import {Routes, Route} from 'react-router-dom'


//pages
import Home from './pages/Home/Home'
import Interview from './pages/Interview/Interview'

function App() {

  return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/interview' element={<Interview />} />
        </Routes>
  )
}

export default App
