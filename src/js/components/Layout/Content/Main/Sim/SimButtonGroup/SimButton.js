import React from 'react';

require('../../../../../../../sass/simbutton.scss');

export default class SimButton extends React.Component {

  handleClick(e) {
    this.props.action();
  }

  render() {
    return (
      <button className={"btn btn-primary btn-sim " + this.props.buttonState}
              onClick={this.handleClick.bind(this)}>
        {this.props.text}
      </button>
    );
  }
}