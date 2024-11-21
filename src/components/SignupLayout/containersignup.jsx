import './styles/containersignup.css'
import myImage from "../../assets/logo1.png"
import { Link } from "react-router-dom";
import Signup from '../SignupLayout/signupform'


function container() {
  return (
    <>
        <div className="containerSignup">
            <img src={myImage} />
            <h4 className='logo'>MUZEUM</h4>
            <h1 className='title'>SignUp to MUZEUM</h1>
            <div className="loginform">
                <Signup />
            </div>
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
