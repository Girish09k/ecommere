import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [state, setState] = useState('Login');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log('Login function executed', formData);
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/'); // Redirect on success
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed! Please check your credentials or try again later.");
    }
  };

  const signup = async () => {
    console.log('Signup function executed', formData);
    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/'); // Redirect on success
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleStateChange = () => {
    setState(state === 'Login' ? 'Signup' : 'Login');
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === 'Signup' && (
            <input
              name='username'
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder='Your Name'
            />
          )}
          <input
            name='email'
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder='Email Address'
          />
          <input
            name='password'
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder='Password'
          />
        </div>
        <button onClick={state === 'Login' ? login : signup}>Continue</button>
        <p className="loginsignup-login">
          {state === 'Signup'
            ? 'Already have an account? '
            : 'Create an account '}
          <span onClick={handleStateChange}>{state === 'Signup' ? 'Login Here' : 'Click Here'}</span>
        </p>
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
