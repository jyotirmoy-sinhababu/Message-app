import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Register() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className='reg-form'
      >
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder='Enter your name'
          type='text'
          name='name'
          className='reg-frm-inp'
        />
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder='Enter your email'
          type='email'
          name='email'
          className='reg-frm-inp'
        />

        <input
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder='Enter password'
          type='password'
          name='password'
          className='reg-frm-inp'
        />
        <NavLink to='/login' className='navigate-btn' type='button'>
          Login
        </NavLink>
        <button type='submit' className='btn'>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
