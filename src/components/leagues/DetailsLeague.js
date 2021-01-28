import React, { Component, Fragment } from 'react';

class DetailsLeague extends Component {
  componentDidMount() {
    this.props.getLeague(this.props.match.params.id);
  }

  char = () => {
    if (this.props.league.modified_at) {
      return (
        <Fragment>
          <p>{this.props.league.modified_at.substr(0, 4)}</p>
          <p>
            From: {this.props.league.modified_at.substr(0, 10)}{' '}
            {this.props.league.modified_at.substr(11, 5)}
          </p>
        </Fragment>
      );
    }
  };
  render() {
    const { image_url, name, videogame } = this.props.league;

    return (
      <div className='card text-center'>
        <img src={image_url} alt='' />
        <h1>{name}</h1>
        <br />
        <h3>Game : {videogame && videogame['name']}</h3>
        <br />
        <br />
        <hr />
        <br />
        {this.char()}
        <br />
        <br />
      </div>
    );
  }
}

export default DetailsLeague;
