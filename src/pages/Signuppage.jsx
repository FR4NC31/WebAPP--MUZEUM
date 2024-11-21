import SignUpLayout from '../components/SignupLayout/containersignup'
import { useEffect } from 'react'

function Signuppage() {

    useEffect(() => {
        document.title = "Sign Up"
    })

  return (
    <>
      <SignUpLayout />
    </>
  )
}

export default Signuppage
