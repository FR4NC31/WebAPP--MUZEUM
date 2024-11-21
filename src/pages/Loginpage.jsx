import LoginLayout from '../layout/LoginLayout'
import { useEffect } from 'react'

function Loginpage() {

    useEffect(() => {
        document.title = "Login"
    })
  return (
    <>
        <LoginLayout />
    </>
  )
}

export default Loginpage
