import './styles/verify.css'
import { useNavigate } from 'react-router-dom';

function verification() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    const input = document.querySelector('.verify');
    if (input.value.trim() === '') {
      input.setCustomValidity('This field is required');
      input.reportValidity();
    } else {
      input.setCustomValidity('');
      navigate('/login');
    }
  };

  return (
    <div className="verification">
      <p className='verifyText'>Please enter the verification code</p>
      <input type="text" className='verify' required />
      <button className='loginBtn' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default verification

