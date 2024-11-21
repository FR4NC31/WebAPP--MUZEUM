import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Loginpage from './pages/Loginpage'

const App = () => {
  return (
    <Routes>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/Home" element={<Homepage />} />
    </Routes>
  )
}

export default App
