import React from 'react';
import SimButton from './SimButtonGroup/SimButton';

export default class SimButtonGroup extends React.Component {
  render() {
    var randomButtonState = (this.props.running)
                              ? 'disabled'
                              : 'enabled';
    var stopButtonState = (this.props.running)
                            ? 'enabled'
                            : 'disabled';
    var startResetButtonState = (this.props.running ||
                                 this.props.length < 7)
                                  ? 'disabled'
                                  : 'enabled';
    return (
      <div>
        <SimButton buttonState={startResetButtonState}
                   text="Start"
                   action={this.props.start} />
        <SimButton buttonState={stopButtonState}
                   text="Stop"
                   action={this.props.stop} />
        <SimButton buttonState={startResetButtonState}
                   text="Reset"
                   action={this.props.reset} />
        <SimButton buttonState={randomButtonState}
                   text="Random"
                   action={this.props.random} />
      </div>
    );
  }
}