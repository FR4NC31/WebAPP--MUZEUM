import Navbar from '../components/HomeLayout/navbar'
import Sidebar from '../components/HomeLayout/sidebar'
import Circle from '../components/HomeLayout/circle'
import './styles/homeLayout.css'
const homeLayout = () => {
  return (
    <div className='homeLayout'>
        <Navbar />
        <Sidebar />
        <Circle />
    </div>
  )
}

export default homeLayout
