import '../styles/sidebar.css'

//icons
import { GoHome } from "react-icons/go";
import { GrGallery } from "react-icons/gr";
import { CiStar, CiSettings } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { LiaPaintBrushSolid } from "react-icons/lia";
import { MdOutlineMenu } from "react-icons/md";


function sidebar() {
  return (
    <div className="sidebar">
        <div className="container">
        <label className='menu'>
            <input type="checkbox" className='checkbox' />
            <MdOutlineMenu color='#FEFAE0' className='menuIcon' />
        </label>
            <button className='createBtn'>
                <LiaPaintBrushSolid color='#FEFAE0' className='brush' />
                Create
            </button>
            <div className="containerbtn">
                <button className='sidebtn'>
                    <GoHome />
                    Home
                </button>
                <button className='sidebtn'>
                    <GrGallery />
                    Gallery
                </button>
                <button className='sidebtn'>
                    <CiStar />
                    Favorites
                </button>
                <button className='sidebtn'>
                    <FaRegTrashAlt />
                    Trash
                </button>
                <button className='sidebtn settings'>
                    <CiSettings />
                    Settings
                </button>
            </div>
        </div>
    </div>
  )
}

export default sidebar
