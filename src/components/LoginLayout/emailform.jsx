import './styles/emailform.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

//icon
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa6';

function EmailForm() {
  const [type, setType] = useState('password');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    if (email && password) {
      navigate('/home', { replace: true });
    }
  };

  return (
    <form className="emailform" onSubmit={handleSubmit}>
      <label className="email">Email Address</label>
      <input className="emailInput input" type="email" placeholder="test@gmail.com" name="email" required />
      <label className="password">Password</label>
      <input className="input" type={type} placeholder="password" name="password" id="password" required />
      <button className="eye" onClick={() => setType(type === 'password' ? 'text' : 'password')}>
        {type === 'password' ? <FaRegEye /> : <FaRegEyeSlash />}
      </button>
      <button className="login" type="submit">LOGIN</button>
      <p className="or">
        Need an account
        <NavLink className="register" to="/signup">
          Register
        </NavLink>
      </p>
    </form>
  );
}

export default EmailForm;
