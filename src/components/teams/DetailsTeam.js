import React, { Component } from 'react';

class DetailsTeam extends Component {
  componentDidMount() {
    this.props.getTeam(this.props.match.params.id);
  }

  char = () => {
    if (this.props.team.players) {
      return true;
    }
  };

  render() {
    const { image_url, name, current_videogame } = this.props.team;

    return (
      <div className='card text-center'>
        <img src={image_url} alt='' />
        <h1>{name}</h1>
        <br />
        <h3>Game : {current_videogame && current_videogame['name']}</h3>
        <br />
        <br />
        <hr />
        <br />
        <h4>Players:</h4>
        {this.props.team.players &&
          this.props.team.players.map((player) => {
            return (
              <span>
                {player.name} {'  '}
              </span>
            );
          })}
        <br />
        <br />
      </div>
    );
  }
}

export default DetailsTeam;
