import React from 'react';
import Sim from './Main/Sim';

export default class Main extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-md-10">
        <div className="row">
          <Sim />
        </div>
      </div>
    );
  }
}