import Navbar from '../components/HomeLayout/navbar'
import Sidebar from '../components/HomeLayout/sidebar'
import Post from '../components/PostingLayout/containerPost'
import './styles/homeLayout.css'

function PostLayout() {
  return (
    <>
        <div className="postLayout">
            <Navbar />
            <Sidebar />
            <Post />
        </div>
    </>
  )
}

export default PostLayout
