import React from 'react';
import { Link } from 'react-router-dom';

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

  removeScatt = () => {
    const { scattId } = this.props.match.params;
    scattData.deleteScatt(scattId)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('unable to delete single scatt: ', err));
  }

  render() {
    const { scatt } = this.state;
    const { scattId } = this.props.match.params;
    const editLink = `/edit/${scattId}`;
    return (
      <div className="SingleScatt">
        <Link className="btn btn-warning" to={editLink}>edit</Link>
        <button className="btn btn-danger" onClick={this.removeScatt}>delete</button>
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
