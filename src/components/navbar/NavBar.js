import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from '../../Firebase';
import { signOut } from 'firebase/auth';
import { updateDoc, doc } from 'firebase/firestore';
import { AuthContext } from '../context/auth';
import './navbar.css';

const NavBar = () => {
  const { user } = useContext(AuthContext);

  const handelSignOut = async () => {
    await updateDoc(doc(db, 'users', auth.currentUser.uid), {
      isOnline: false,
    });
    await signOut(auth);
  };

  return (
    <nav className='nav-container'>
      <h3 className='nav-container-chat'>
        <Link className='nav-container-chat-link' to='/'>
          Chats
        </Link>
      </h3>
      <div className='nav-container-links'>
        {user ? (
          <>
            <Link className='nav-container-links-register' to='/profile'>
              Profile
            </Link>
            <button
              className='nav-container-links-logout'
              onClick={handelSignOut}
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <Link className='nav-container-links-register' to='/register'>
              Register
            </Link>
            <Link className='nav-container-links-login' to='/Login'>
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
