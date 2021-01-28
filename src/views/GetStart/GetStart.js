// React
import React from 'react';
import { Link } from 'react-router-dom';
// Local styles
import './GetStart.css';
// Images
import rickAndMortyLogo from '../../images/rick_and_morty_logo.png';

function GetStart(props) {
  document.title='Rick and Morty | Welcome'
  return (
    <div className='getstart-div'>
      <div className='getstart-cover'></div>
      <div className='getstart-dialog'>
        <img
          className='getstart-img'
          src={rickAndMortyLogo}
          alt='Rick and Morty logo'
        />
        <Link className='btn btn-success btn-lg btn-block' to='/characters'>Start</Link>
      </div>
    </div>
  );
}

export default GetStart;
