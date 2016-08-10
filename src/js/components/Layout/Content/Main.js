import React from 'react';
import Sim from './Main/Sim';
import Frequency from './Main/Frequency';

export default class Main extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-lg-9">
        <div className="row">
          <Sim />
          <Frequency data={this.props.data} />
        </div>
      </div>
    );
  }
}