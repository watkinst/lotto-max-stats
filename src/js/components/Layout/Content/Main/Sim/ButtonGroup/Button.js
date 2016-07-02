import React from 'react';

require('../../../../../../../sass/button.scss');

export default class Button extends React.Component {

  handleClick(e) {
    this.props.action();
  }

  render() {
    return (
      <button className="btn btn-primary"
              onClick={this.handleClick.bind(this)}>
        {this.props.text}
      </button>
    );
  }
}