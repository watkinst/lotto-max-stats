import React from 'react';

require('../../../../../../sass/simintro.scss');

export default class SimIntro extends React.Component {
  render() {

    var introText = '';
    introText += "This Lotto Max simulator rapidly chooses random sets of";
    introText += " winning numbers, running many simulated Lotto Max draws";
    introText += " in a very short amount of time. The numbers you pick are";
    introText += " compared to the randomly chosen winning numbers and the";
    introText += " results are displayed below. You can choose numbers one at";
    introText += " a time or use the 'Quick Pick' button to pick an entire set";
    introText += " of numbers. Numbers chosen with the 'Quick Pick' button may";
    introText += " be changed individually. Do you think your numbers can win";
    introText += " Lotto Max? Select them here and click the start button to";
    introText += " find out!";

    return (
      <div className="col-xs-12 sim-intro">
        <h2 class="title">Lotto Max Simulator</h2>
        <p>{introText}</p>
      </div>
    );
  }
}