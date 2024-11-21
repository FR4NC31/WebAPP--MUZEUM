import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import './index.css'

//pages
import Homepage from './pages/Homepage'
import Loginpage from './pages/Loginpage'
import SignUppage from './pages/Signuppage'
import Verifypage from './pages/Verificationpage'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
        <Routes>
            <Route path="/login" element={<Loginpage />} />
            <Route path="/signup" element={<SignUppage />} />
            <Route path="/home" element={<Verifypage />} />
            <Route path="/home" element={<Homepage />} />
        </Routes>
    </Router>
  </StrictMode>,
)
