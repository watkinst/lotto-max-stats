import React from 'react';

require('../../../../../../sass/simintro.scss');

export default class SimIntro extends React.Component {
  
  getIntroText() {
    var introText = '';
    introText += "This Lotto Max draw simulator rapidly chooses random sets of";
    introText += " winning numbers and runs many simulated Lotto Max draws";
    introText += " in a very short amount of time. The numbers you pick are";
    introText += " compared to the randomly chosen winning numbers and the";
    introText += " results are displayed below. You can choose numbers one at";
    introText += " a time or use the 'Quick Pick' button to pick an entire set";
    introText += " of numbers. Numbers chosen with the 'Quick Pick' button may";
    introText += " be changed individually. Do you think your numbers can win";
    introText += " Lotto Max? Select them below and click the 'Start' button";
    introText += " to find out!";

    return introText;
  }

  handleGlyphiconClick() {
    var panel = $("#collapse1");
    var glyphicon = $(".glyphicon");

    if (glyphicon.hasClass('glyphicon-minus')) {
      glyphicon
        .fadeOut(120, function() {
          glyphicon.removeClass("glyphicon-minus");
        })
        .fadeIn(120, function() {
          glyphicon.addClass("glyphicon-plus")
        });
    } else {
      glyphicon
        .fadeOut(120, function() {
          glyphicon.removeClass("glyphicon-plus");
        })
        .fadeIn(120, function() {
          glyphicon.addClass("glyphicon-minus");
        });
    }
  }

  render() {
    return (
      <div className="col-xs-12 sim-intro">
        <h2 className="title">Lotto Max Draw Simulator</h2>
        <div className="panel-group">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h4 className="panel-title">
                Instructions
                <a data-toggle="collapse" href="#collapse1">
                  <span className="glyphicon glyphicon-minus"
                        onClick={this.handleGlyphiconClick}
                        aria-hidden="true">
                  </span>
                </a>
              </h4>
            </div>
            <div id="collapse1" className="panel-collapse collapse in">
              <div className="panel-body">{this.getIntroText()}</div>
            </div>
          </div>
        </div>        
      </div>
    );
  }
}