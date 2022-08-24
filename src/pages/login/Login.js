import { useState } from 'react';
import './login.css';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    error: '',
  });

  const { email, password, error } = data;

  const handelChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setData({ ...data, error: 'All field are required' });
    }
  };

  return (
    <div className='main-login-cnt'>
      <div className='heading-cnt'>
        <p className='login-heading'>please login</p>
      </div>
      <form
        onSubmit={(e) => {
          handelSubmit(e);
        }}
        className='login-form'
      >
        <input
          onChange={(e) => {
            handelChange(e);
          }}
          placeholder='Enter your email'
          type='email'
          name='email'
          className='login-frm-inp'
        />

        <input
          onChange={(e) => {
            handelChange(e);
          }}
          placeholder='Enter password'
          type='password'
          name='password'
          className='login-frm-inp'
        />
        {error ? <p>{error}</p> : null}
        <button type='submit' className='login-btn'>
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
