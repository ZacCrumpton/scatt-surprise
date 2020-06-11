import React from 'react';

import ScattCard from '../../shared/ScattCard/ScattCard';

import './Home.scss';

class Home extends React.Component {
  state = {
    scatts: [],
  }

  editEvent = (e) => {
    e.preventDefault();
    const scattId = '12345';
    // /edit/12345; <- url that we want.
    this.props.history.push(`/edit/${scattId}`);
  }

  render() {
    const { scatts } = this.state;
    const buildScattCards = scatts.map((scatt) => (
      <ScattCard scatt={scatt} />
    ));
    return (
      <div className="Home">
        <h1>Home</h1>
        <button className="btn btn-dark" onClick={this.editEvent}>Edit a Thing</button>
          <div className="d-flex flex-wrap">
            {buildScattCards}
          </div>
      </div>
    );
  }
}

export default Home;
