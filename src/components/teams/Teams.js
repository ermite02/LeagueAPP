import React from 'react';
import TeamItem from './TeamItem';
import Spinner from '../layout/Spinner';

const Teams = ({ teams, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        {teams.map((team) => (
          <TeamItem key={team.id} team={team} />
        ))}
      </div>
    );
  }
};

export default Teams;
