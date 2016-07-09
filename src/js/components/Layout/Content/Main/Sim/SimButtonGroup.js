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
    var startButtonState = (this.props.running ||
                            this.props.length < 7)
                              ? 'disabled'
                              : 'enabled';
    var clearButtonState = (this.props.running ||
                            this.props.length < 7 ||
                            this.props.draws == 0)
                              ? 'disabled'
                              : 'enabled';
    var clearSelectionsButtonState = (this.props.running ||
                                      this.props.length < 1)
                                       ? 'disabled'
                                       : 'enabled';
    return (
      <div>
        <SimButton buttonState={startButtonState}
                   text="Start"
                   action={this.props.start} />
        <SimButton buttonState={stopButtonState}
                   text="Stop"
                   action={this.props.stop} />
        <SimButton buttonState={randomButtonState}
                   text="Random"
                   action={this.props.random} />
        <SimButton buttonState={clearSelectionsButtonState}
                   text="Clear Selections"
                   action={this.props.clearSelections} />
        <SimButton buttonState={clearButtonState}
                   text="Clear Results"
                   action={this.props.clearResults} />
        <SimButton buttonState={clearButtonState}
                   text="Clear All"
                   action={this.props.clearAll} />
      </div>
    );
  }
}