import React from 'react';

import { Link } from 'react-router-dom';

import './Home.scss';

class Home extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    const scattId = '12345';
    // /edit/12345; <- url that we want.
    this.props.history.push(`/edit/${scattId}`);
  }

  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <button className="btn btn-dark" onClick={this.editEvent}>Edit a Thing</button>
        <Link to='/scatts/54325432' >View Single</Link>
        <Link to='/new' >View NEW</Link>
      </div>
    );
  }
}

export default Home;
