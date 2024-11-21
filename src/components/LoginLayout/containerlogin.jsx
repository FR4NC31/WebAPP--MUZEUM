import '../styles/containerlogin.css'
import Email from './emailform'
import myImage from "../../assets/logo1.png"
import { Link } from "react-router-dom";


function container() {
  return (
    <>
        <div className="containerLogin">
            <img src={myImage} />
            <h4 className='logo'>MUZEUM</h4>
            <h1 className='title'>Login to MUZEUM</h1>
            <div className="loginform">
                <Email />
            </div>
            <p className='forgot'>
                <Link className='forgot' to="/forgotpassword">
                Forgot Password?
                </Link>
            </p>
            <p className='terms'>
                <Link className='terms' to="/terms&policy">
                    Terms & Policy
                </Link>
            </p>
        </div>

    </>
  )
}

export default container
