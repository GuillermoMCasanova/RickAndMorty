// React
import React from 'react';
import { Link } from 'react-router-dom';
// Local styles
import './NotFound.css';

function NotFound(props) {
  document.title = 'Rick and Morty | 404 Error';
  return (
    <div className='notfound-div'>
      <div className='notfound-cover'></div>
      <div className='notfound-dialog'>
        <h1 className='display-1 notfound-message'>Not Found Error</h1>
        <Link className='btn btn-danger btn-lg btn-block' to='/'>
          Go to homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
