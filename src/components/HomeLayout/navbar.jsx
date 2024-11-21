import './styles/navbat.css'
import { BsBell } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";

function navbar() {
  return (
    <div className="navbar">
        <div className="content">
            <h1>MUZEUM</h1>
            <FaMagnifyingGlass color='#FEFAE0' className='searchIcon' />
            <input type="text" placeholder='Search art styles, artist, etc.' className="search" />
            <button className='notifBtn'>
                <BsBell color='#FEFAE0' />
            </button>
            <span className='profile'>profile</span>
            <button className='dropDown'>
                <FaAngleDown />
            </button>
        </div>
    </div>
  )
}

export default navbar
