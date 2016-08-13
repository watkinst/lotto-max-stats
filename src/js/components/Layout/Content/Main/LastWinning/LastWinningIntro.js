import React from 'react';

require('../../../../../../sass/lastwinningintro.scss');

export default class LastWinningIntro extends React.Component {

  getLastDrawDate() {
    var lastDraw = this.props.getLastDraw();
    return lastDraw.date;
  }

  render() {

    var lastDrawDate = this.getLastDrawDate();

    return (
      <div className="col-xs-12 last-winning-intro">
        <h2 className="title">Last Winning Lotto Max Numbers</h2>
        <p>Here are the winning numbers from the draw held on {lastDrawDate} (bonus in green).</p>
      </div>
    );
  }
}