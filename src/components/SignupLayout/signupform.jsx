import '../styles/signupform.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

//icon
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa6';

function EmailForm() {
  const [type, setType] = useState('password');
  const [confirmType, setConfirmType] = useState('password');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    const confirmPassword = event.currentTarget.confirmPassword.value;
    const username = event.currentTarget.username.value;

    if (email && password && confirmPassword && username && password === confirmPassword) {
      navigate('/home', { replace: true });
    }
  };

  return (
    <form className="signupform" onSubmit={handleSubmit}>
      <label className="signup-username">Username</label>
      <input className="signup-userInput signup-input" type="text" placeholder="username" name="username" required />
      <label className="signup-email">Email Address</label>
      <input className="signup-emailInput signup-input" type="email" placeholder="test@gmail.com" name="email" required />
      <label className="signup-password">Password</label>
      <input className="signup-input" type={type} placeholder="password" name="password" id="password" required />
      <button className="signup-eye1" type="button" onClick={() => setType(type === 'password' ? 'text' : 'password')}>
        {type === 'password' ? <FaRegEye /> : <FaRegEyeSlash />}
      </button>
      <label className="signup-confirmPassword">Confirm Password</label>
      <input className="signup-input" type={confirmType} placeholder="confirm password" name="confirmPassword" id="confirmPassword" required />
      <button className="signup-eye2" type="button" onClick={() => setConfirmType(confirmType === 'password' ? 'text' : 'password')}>
        {confirmType === 'password' ? <FaRegEye /> : <FaRegEyeSlash />}
      </button>
      <button className="signup-submit" type="submit">SIGN UP</button>
      <p className="signup-or">
        Already have an account?
        <NavLink className="signup-register" to="/login">
          Login
        </NavLink>
      </p>
    </form>
  );
}

export default EmailForm;
