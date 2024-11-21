import Homelayout from '../layout/homeLayout'
import { useEffect } from "react"
function Homepage() {
    useEffect(() => {
        document.title = "Home"
    })
  return (
    <>
        <Homelayout />
    </>
  )
}

export default Homepage
