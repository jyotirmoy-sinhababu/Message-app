import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../Firebase';
import { setDoc, doc, Timestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './register.css';

function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    // error: '',
  });

  const { name, email, password } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    // if (!name || !email || !password) {
    //   setData({ ...data, error: 'All fields are require' });
    // }
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, 'users', res.user.uid), {
        uid: res.user.uid,
        name,
        email,
        password,
        createdAt: Timestamp.fromDate(new Date()),
        isOnline: true,
      });
      setData({ name: '', email: '', password: '' });
      navigate('/');
    } catch (err) {
      // setData({ ...data, error: 'All fields are require' });
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

        {/* {error ? <p className='error'>{error}</p> : null} */}

        <button type='submit' className='submit-btn'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
