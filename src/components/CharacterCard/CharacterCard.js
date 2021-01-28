// React
import React from 'react';

function CharacterCard(props) {
  const { name, species, gender, image } = props.character;

  return (
    <div className='card' style={{width: 19+'rem'}}>
      <img className='card-img-top' src={image} alt={name} />
      <div className='card-body'>
        <h5 className='card-title text-info'>{name}</h5>
        <p className='card-text'>
          {species} {gender}
        </p>
      </div>
    </div>
  );
}

export default CharacterCard;
