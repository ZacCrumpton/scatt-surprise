import React from 'react';
import { Link } from 'react-router-dom';

import scattShape from '../../../helpers/propz/scattShape';
import './ScattCard.scss';


class ScattCard extends React.Component {
  static propTypes = {
    scatt: scattShape.scattShape,
  }

  render() {
    const { scatt } = this.props;
    const singleLink = `/scatts/${scatt.id}`;
    const editLink = `/edit/${scatt.id}`;
    return (
      <div className="ScattCard col-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{scatt.location}</h5>
            <p className="card-text">{scatt.notes}</p>
            <Link className="btn btn-info" to={singleLink}></Link>
            <Link className="btn btn-warning" to={editLink}></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ScattCard;
