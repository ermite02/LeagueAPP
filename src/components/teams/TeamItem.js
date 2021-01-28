import React from 'react';
import { Link } from 'react-router-dom';

const TeamItem = ({ team: { id, image_url, name } }) => {
  return (
    <div className='card text-center'>
      <img src={image_url} alt='' className='image' />
      <Link to={`/teams/${id}`} className='details-link'>
        <h3>{name}</h3>
      </Link>
    </div>
  );
};

export default TeamItem;
