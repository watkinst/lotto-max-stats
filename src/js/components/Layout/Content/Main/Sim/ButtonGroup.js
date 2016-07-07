import React from 'react';
import Button from './ButtonGroup/Button';

export default class ButtonGroup extends React.Component {
  render() {
    var buttonState = (this.props.running)
                        ? 'disabled'
                        : 'enabled';
    var stopButtonState = (this.props.running)
                            ? 'enabled'
                            : 'disabled';
    return (
      <div>
        <Button buttonState={buttonState}
                text="Start"
                action={this.props.start} />
        <Button buttonState={stopButtonState}
                text="Stop"
                action={this.props.stop} />
        <Button buttonState={buttonState}
                text="Reset"
                action={this.props.reset} />
        <Button buttonState={buttonState}
                text="Random"
                action={this.props.random} />
      </div>
    );
  }
}