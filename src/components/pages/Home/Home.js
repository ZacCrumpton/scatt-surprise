import React from 'react';

import authData from '../../../helpers/data/authData';
import scattData from '../../../helpers/data/scattData';
import ScattCard from '../../shared/ScattCard/ScattCard';

import './Home.scss';

class Home extends React.Component {
  state = {
    scatts: [],
  }

  getScatts = () => {
    const uid = authData.getUid();
    scattData.getScattsByUid(uid)
      .then((scatts) => this.setState({ scatts }))
      .catch((err) => console.error('unable to get scats: ', err));
  }

  componentDidMount() {
    this.getScatts();
  }

  removeScatt = (scattId) => {
    scattData.deleteScatt(scattId)
      .then(() => this.getScatts())
      .catch((err) => console.error('unable to delete scatt: ', err));
  }

  render() {
    const { scatts } = this.state;
    const buildScattCards = scatts.map((scatt) => (
      <ScattCard key={scatt.id} scatt={scatt} removeScatt={this.removeScatt} />
    ));
    return (
      <div className="Home">
        <h1>Home</h1>
          <div className="d-flex flex-wrap">
            {buildScattCards}
          </div>
      </div>
    );
  }
}

export default Home;
