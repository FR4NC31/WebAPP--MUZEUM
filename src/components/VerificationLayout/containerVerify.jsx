import './styles/containerVerify.css'
import myImage from "../../assets/logo1.png"
import Verify from '../VerificationLayout/verification'


function container() {
  return (
    <>
        <div className="containerVerify">
            <img src={myImage} />
            <h4 className='logo'>MUZEUM</h4>
            <Verify />
        </div>
    </>
  )
}

export default container
