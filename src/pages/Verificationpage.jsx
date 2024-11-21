import Verify from '../layout/verifyLayout'
import { useEffect } from 'react'

function Verificationpage() {
    useEffect(() => {
        document.title = "Verification Signup"
    })
  return (
    <>
      <Verify />
    </>
  )
}

export default Verificationpage
