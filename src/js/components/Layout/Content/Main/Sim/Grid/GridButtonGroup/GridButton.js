import React from 'react';

require('../../../../../../../../sass/gridbutton.scss');

export default class GridButton extends React.Component {

  handleClick(e) {
    var clickedNumber = this.getClickedNumber();
    var selected = this.isClickedNumberSelected(clickedNumber);

    if (selected) {
      this.props.deselect(clickedNumber);
    } else {
      this.props.select(clickedNumber);
    }
  }

  getButtonState(selected) {
    return (!selected && (this.props.selections.length == 7))
      ? "disabled"
      : "enabled";
  }

  getButtonType(selected) {
    return (selected) ? "btn-primary" : "btn-default";
  }

  getClickedNumber() {
    return parseInt(this.props.text, 0);
  }

  isClickedNumberSelected(number) {
    return this.props.selections.indexOf(number) > -1;
  }

  render() {

    var value = this.getClickedNumber();
    var selected = this.isClickedNumberSelected(value);
    var buttonType = this.getButtonType(selected);
    var buttonState = this.getButtonState(selected);

    return (
      <button className={"btn " + buttonType + " btn-grid " + buttonState}
              onClick={this.handleClick.bind(this)}>
        {this.props.text}
      </button>      
    );
  }
}