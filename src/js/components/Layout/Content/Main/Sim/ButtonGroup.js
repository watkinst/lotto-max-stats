import React from 'react';
import Button from './ButtonGroup/Button';

export default class ButtonGroup extends React.Component {
  render() {
    var randomButtonState = (this.props.running)
                              ? 'disabled'
                              : 'enabled';
    var stopButtonState = (this.props.running)
                            ? 'enabled'
                            : 'disabled';
    var startResetButtonState = (this.props.running || this.props.length == 0)
                                  ? 'disabled'
                                  : 'enabled';
    return (
      <div>
        <Button buttonState={startResetButtonState}
                text="Start"
                action={this.props.start} />
        <Button buttonState={stopButtonState}
                text="Stop"
                action={this.props.stop} />
        <Button buttonState={startResetButtonState}
                text="Reset"
                action={this.props.reset} />
        <Button buttonState={randomButtonState}
                text="Random"
                action={this.props.random} />
      </div>
    );
  }
}