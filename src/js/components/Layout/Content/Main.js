import React from 'react';
import Sim from './Main/Sim';

export default class Main extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-lg-9">
        <div className="row">
          <Sim />
          <div className="col-xs-12 col-md-6">
            Some other widget will go in this area once I code it
          </div>
        </div>
      </div>
    );
  }
}