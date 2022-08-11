import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function NavBar() {
  return (
    <nav className='nav-container'>
      <h3 className='nav-container-chat'>
        <Link className='nav-container-chat-link' to='/'>
          Chats
        </Link>
      </h3>
      <div className='nav-container-links'>
        <Link className='nav-container-links-register' to='/register'>
          Register
        </Link>
        <Link className='nav-container-links-login' to='/Login'>
          Login
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
