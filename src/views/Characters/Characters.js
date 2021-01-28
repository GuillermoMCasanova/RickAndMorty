// React
import React from 'react';
// Local components
import CardList from '../../components/CardsList/CardList';
import Navbar from '../../components/Navbar/Navbar';

function Characters(props) {
  return (
    <>
      <Navbar />
      <br/>
      <CardList />
    </>
  );
}

export default Characters;
