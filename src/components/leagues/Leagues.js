import React from 'react';
import LeagueItem from './LeagueItem';
import Spinner from '../layout/Spinner';

const Leagues = ({ leagues, loading, league }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        {leagues.map((league) => (
          <LeagueItem key={league.id} league={league} />
        ))}
      </div>
    );
  }
};

export default Leagues;
