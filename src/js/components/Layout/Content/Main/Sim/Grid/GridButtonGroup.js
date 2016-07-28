import React from 'react';
import GridButton from './GridButtonGroup/GridButton';

export default class GridButtonGroup extends React.Component {
  
  populateButtons() {
    var buttons = [];
    for (var i = 0; i < 49; i++) {
      buttons.push(
        {
          "number": i,
          "select": this.props.select,
          "deselect": this.props.deselect,
          "selections": this.props.selections
        }
      );
    }
    return buttons;
  }

  render() {
    
    var buttons = this.populateButtons();
    
    return (
      <div className="col-xs-12 col-sm-6 col-lg-4">
        {buttons.map(
          function(button, index) {
            return (
              <GridButton key={index}
                          text={index + 1}
                          select={button.select}
                          deselect={button.deselect}
                          selections={button.selections} />
            );
          }
        )}        
      </div>
    );
  }
}