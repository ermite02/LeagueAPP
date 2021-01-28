import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Leagues from './components/leagues/Leagues';
import Teams from './components/teams/Teams';
import SearchLeague from './components/leagues/SearchLeague';
import SearchTeam from './components/teams/SearchTeam';
import DetailsLeague from './components/leagues/DetailsLeague';
import DetailsTeam from './components/teams/DetailsTeam';
import Axios from 'axios';
import { Pagination } from '@material-ui/lab';

class App extends Component {
  //STATE
  state = {
    leagues: [],
    league: {},
    team: {},
    loading: false,
    teams: [],
    page: '',
    where: '',
  };

  //FONCTION QUI S'EXECUTE AU MOMENT DU LOAD POUR RECUPERER LES DONNEES DES API
  async componentDidMount() {
    this.setState({ loading: true });

    const res = await Axios.get(
      '/api/leagues?page[size]=5&&page[number]=1&&token=7eMZXb0MMIN4MiANAJ3ES8R3QgQ0BXN69O4wRgjMwQTtp97z-eU'
    );
    const res2 = await Axios.get(
      '/api/teams?page[size]=5&&page[number]=1&&token=7eMZXb0MMIN4MiANAJ3ES8R3QgQ0BXN69O4wRgjMwQTtp97z-eU'
    );

    this.setState({ leagues: res.data, loading: false, teams: res2.data });
  }

  //FONCTION POUR RECHERCHER DES LEAGUES
  searchLeagues = async (text) => {
    if (text === '') {
      this.setState({ loading: true });

      const res = await Axios.get(
        '/api/leagues?page[size]=5&&page[number]=1&&token=7eMZXb0MMIN4MiANAJ3ES8R3QgQ0BXN69O4wRgjMwQTtp97z-eU'
      );

      this.setState({ leagues: res.data, loading: false });
    } else {
      this.setState({ loading: true });
      const res = await Axios.get(
        `/api/leagues?search[name]=${text}&&token=7eMZXb0MMIN4MiANAJ3ES8R3QgQ0BXN69O4wRgjMwQTtp97z-eU`
      );
      this.setState({ leagues: res.data, loading: false });
    }
  };

  //FONCTION POUR RECHERCHER DES TEAMS
  searchTeams = async (text) => {
    if (text === '') {
      this.setState({ loading: true });

      const res = await Axios.get(
        '/api/teams?page[size]=5&&page[number]=1&&token=7eMZXb0MMIN4MiANAJ3ES8R3QgQ0BXN69O4wRgjMwQTtp97z-eU'
      );

      this.setState({ teams: res.data, loading: false });
    } else {
      this.setState({ loading: true });
      const res = await Axios.get(
        `/api/teams?search[name]=${text}&&token=7eMZXb0MMIN4MiANAJ3ES8R3QgQ0BXN69O4wRgjMwQTtp97z-eU`
      );
      this.setState({ teams: res.data, loading: false });
    }
  };

  //Fonction POUR LES DETAILS D'UNE LEAGUE
  getLeague = async (leagueId) => {
    this.setState({ loading: true });
    const res = await Axios.get(
      `/api/leagues/${leagueId}?token=7eMZXb0MMIN4MiANAJ3ES8R3QgQ0BXN69O4wRgjMwQTtp97z-eU`
    );
    this.setState({ league: res.data, loading: false });
  };

  //Fonction POUR LES DETAILS D'UNE TEAM
  getTeam = async (TeamId) => {
    this.setState({ loading: true });
    const res = await Axios.get(
      `/api/teams/${TeamId}?token=7eMZXb0MMIN4MiANAJ3ES8R3QgQ0BXN69O4wRgjMwQTtp97z-eU`
    );
    this.setState({ team: res.data, loading: false });
  };

  //FONCTION POUR LA PAGINATION DES LEAGUES
  handleLeagueChange = async (event, value) => {
    this.setState({ loading: true });
    const res = await Axios.get(
      `/api/leagues?page[size]=5&&page[number]=${value}&&token=7eMZXb0MMIN4MiANAJ3ES8R3QgQ0BXN69O4wRgjMwQTtp97z-eU`
    );
    this.setState({ leagues: res.data, loading: false });
  };

  //FONCTION POUR LA PAGINATION DES Teams
  handleTeamChange = async (event, value) => {
    this.setState({ loading: true });
    const res = await Axios.get(
      `/api/teams?page[size]=5&&page[number]=${value}&&token=7eMZXb0MMIN4MiANAJ3ES8R3QgQ0BXN69O4wRgjMwQTtp97z-eU`
    );
    this.setState({ teams: res.data, loading: false });
  };

  //FONCTION RENDER
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route
              exact
              path='/'
              render={() => (
                <h2>
                  Leagues ou Teams? C'est à vous de choisir dans la barre de
                  navigation juste en dessus !😉
                </h2>
              )}
            />

            <Route
              exact
              path='/leagues'
              render={(props) => (
                <Fragment>
                  <h1 className='text-center' id='leagues'>
                    LEAGUES
                  </h1>
                  <SearchLeague searchLeagues={this.searchLeagues} />

                  <Leagues
                    loading={this.state.loading}
                    leagues={this.state.leagues}
                  />
                  <div className='pagination text-center'>
                    <Pagination count={78} onChange={this.handleLeagueChange} />
                  </div>
                </Fragment>
              )}
            />

            <Route
              exact
              path='/teams'
              render={(props) => (
                <Fragment>
                  <h1 className='text-center' id='teams'>
                    TEAMS
                  </h1>
                  <SearchTeam searchTeams={this.searchTeams} />
                  <Teams
                    loading={this.state.loading}
                    teams={this.state.teams}
                  />
                  <div className='pagination text-center'>
                    <Pagination count={702} onChange={this.handleTeamChange} />
                  </div>
                </Fragment>
              )}
            />

            <Route
              exact
              path='/leagues/:id'
              render={(props) => (
                <Fragment>
                  <DetailsLeague
                    {...props}
                    getLeague={this.getLeague}
                    league={this.state.league}
                  />
                </Fragment>
              )}
            />

            <Route
              exact
              path='/teams/:id'
              render={(props) => (
                <Fragment>
                  <DetailsTeam
                    {...props}
                    getTeam={this.getTeam}
                    team={this.state.team}
                  />
                </Fragment>
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
