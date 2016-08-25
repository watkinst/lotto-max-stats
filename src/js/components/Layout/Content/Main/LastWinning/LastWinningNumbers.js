import React from 'react';

require('../../../../../../sass/lastwinningnumbers.scss');

export default class LastWinningNumbers extends React.Component {
  
  getLastBonusNumber() {
    var lastDraw = this.props.getLastDraw();
    return lastDraw.lotto_max.bonus_number;
  }

  getLastWinningNumbers() {    
    var lastDraw = this.props.getLastDraw();
    return lastDraw.lotto_max.winning_numbers;
  }

  render() {

    var lastWinningNumbers = this.getLastWinningNumbers();
    var lastBonusNumber = this.getLastBonusNumber();

    return (
      <div className="col-xs-12 last-winning-numbers">
        <button className="btn btn-primary btn-last-winning disabled">{lastWinningNumbers[0]}</button>
        <button className="btn btn-primary btn-last-winning disabled">{lastWinningNumbers[1]}</button>
        <button className="btn btn-primary btn-last-winning disabled">{lastWinningNumbers[2]}</button>
        <button className="btn btn-primary btn-last-winning disabled">{lastWinningNumbers[3]}</button>
        <button className="btn btn-primary btn-last-winning disabled">{lastWinningNumbers[4]}</button>
        <button className="btn btn-primary btn-last-winning disabled">{lastWinningNumbers[5]}</button>
        <button className="btn btn-primary btn-last-winning disabled">{lastWinningNumbers[6]}</button>
        <button className="btn btn-success btn-last-winning disabled">{lastBonusNumber}</button>
      </div>
    );
  }
}