// React
import React from 'react';
import { Link } from 'react-router-dom';
function Navbar(props) {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link className='navbar-brand' to='/'>
        Rick and Morty App
      </Link>

      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <a
              className='nav-link'
              target='_blank'
              rel='noreferrer'
              href='https://rickandmortyapi.com/'
            >
              API
            </a>
          </li>
          <li className='nav-item'>
            <a
              className='nav-link'
              target='_blank'
              rel='noreferrer'
              href='https://github.com/'
            >
              About this project
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
