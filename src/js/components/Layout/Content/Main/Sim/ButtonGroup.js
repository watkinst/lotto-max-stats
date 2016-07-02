import React from 'react';
import Button from './ButtonGroup/Button';

export default class ButtonGroup extends React.Component {
  render() {
    return (
      <div>
        <Button text="Start" action={this.props.start} />
        <Button text="Stop" action={this.props.stop} />
        <Button text="Random" action={this.props.random} />
        <Button text="Clear Results" action={this.props.clearResults} />
        <Button text="Clear All" action={this.props.clearAll} />
      </div>
    );
  }
}