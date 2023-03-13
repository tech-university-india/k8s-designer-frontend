import React from 'react';
import './SignUp.css';
const SignUp = () => {
  return (
    <div className='sign-up'>
      <h1>SIGN UP</h1>
      <div className='sign-up-form'>
        <input type='text' placeholder='Full Name' />
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <input type='password' placeholder='Confirm Password' />
      </div>
      <button className='sign-up-button'>SIGN UP</button>
    </div>
  );
};

export default SignUp;