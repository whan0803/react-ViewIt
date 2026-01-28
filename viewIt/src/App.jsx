import './App.css'

import {Routes, Route} from 'react-router-dom'


//pages
import Home from './pages/Home/Home'
import Interview from './pages/Interview/Interview'
import Feedback from './pages/FeedBack/FeedBack'

function App() {

  return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/interview' element={<Interview />} />
          <Route path='/feedback' element={<Feedback />} />
        </Routes>
  )
}

export default App
