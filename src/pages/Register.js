import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';
import './register.css';

function Register() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = data;
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      debugger;
      alert('all field are required ');
    }
    try {
      const createUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      debugger;
    } catch (err) {
      console.log('error');
    }
  };

  return (
    <div className='main-frm-cnt'>
      <div className='heading-cnt'>
        <p className='form-heading'>Register as a user.</p>
      </div>
      <form
        onSubmit={(e) => {
          handelSubmit(e);
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
        <div className='frm-btn'>
          <NavLink to='/login' className='navigate-btn' type='button'>
            Login
          </NavLink>
        </div>

        <button type='submit' className='submit-btn'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
