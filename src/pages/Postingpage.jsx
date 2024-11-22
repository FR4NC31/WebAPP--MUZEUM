import Post from '../layout/PostLayout'
import { useEffect } from 'react'

function Postingpage() {
    useEffect(() => {
        document.title = "Post"
    })
  return (
    <>
      <Post />
    </>
  )
}

export default Postingpage
