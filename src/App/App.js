import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './App.scss';

import Auth from '../components/pages/Auth/Auth';
import MyNavbar from '../components/shared/MyNavbar/MyNavbar';

import NewScatt from '../components/pages/NewScatt/NewScatt';
import EditScatt from '../components/pages/EditScatt/EditScatt';
import Home from '../components/pages/Home/Home';
import SingleScatt from '../components/pages/SingleScatt/SingleScatt';

import fbConnection from '../helpers/data/connection';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
      <div className="App">
        <MyNavbar />
        <h1>Scatt Surprise</h1>
        <Auth />
        <Home />
        <NewScatt />
        <EditScatt />
        <SingleScatt />
      </div>
    );
  }
}

export default App;
