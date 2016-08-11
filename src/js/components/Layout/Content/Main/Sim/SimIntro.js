import React from 'react';

require('../../../../../../sass/simintro.scss');

export default class SimIntro extends React.Component {
  render() {
    return (
      <div className="col-xs-12 sim-intro">
        <h2 class="title">Lotto Max Simulator</h2>
        <p>Think your numbers can win Lotto Max? Choose them here and click the start button to find out!</p>
      </div>
    );
  }
}