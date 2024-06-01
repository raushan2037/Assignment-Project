import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import loginImage from '../images/login.jpg'; // Import your image

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy authentication check
    if (username === 'admin' && password === 'password') {
      onLogin();
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <div>
          <label className='username'>Username</label>
          <input style={{marginTop:'10px'}}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='username'>Password</label>
          <input style={{marginTop:'10px'}}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{width:'260px', marginTop:'20px',fontSize:'18px'}}>Login</button>
        <p style={{color:'black',marginTop:'30px',fontSize:'15px'}}>Don't have an account?<a href='/LoginPage.js'><span style={{color:'blue',cursor:'pointer'}}>SignUp Now</span></a>
        </p>
      </form>
      <div className="login-image">
        <img src={loginImage} alt="Login" />
      </div>
    </div>
  );
};

export default LoginPage;
