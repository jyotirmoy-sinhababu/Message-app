import React from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from '../../Firebase';
import { signOut } from 'firebase/auth';
import { updateDoc, doc } from 'firebase/firestore';
import './navbar.css';

function NavBar() {
  const handelSignOut = async () => {
    await updateDoc(doc(db, 'user', auth.currentUser.uid), {
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
        {auth.currentUser ? (
          <>
            <Link className='nav-container-links-register' to='/profile'>
              Profile
            </Link>
            <button
              className='nav-container-links-login'
              onClick={handelSignOut()}
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
}

export default NavBar;
