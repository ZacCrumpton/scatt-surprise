import React from 'react';

import './SingleScatt.scss';
import scattData from '../../../helpers/data/scattData';

class SingleScatt extends React.Component {
  state = {
    scatt: {},
  }

  componentDidMount() {
    const { scattId } = this.props.match.params;
    scattData.getSingleScatt(scattId)
      .then((response) => this.setState({ scatt: response.data }))
      .catch((err) => console.error('unable to get single scatt: '));
  }

  render() {
    const { scatt } = this.state;
    return (
      <div className="SingleScatt">
        <h1>{scatt.location}</h1>
        <p>Shape: {scatt.shape}</p>
        <p>Size: {scatt.size}</p>
        <p>Temperature: {scatt.temperature}</p>
        <p>Viscosity: {scatt.viscosity}</p>
        <p>Location: {scatt.Location}</p>
        <p>Notes: {scatt.notes}</p>
        <p>Was it Fullfilling? {scatt.wasFulfilling ? 'Yes' : 'No'}</p>
      </div>
    );
  }
}

export default SingleScatt;
