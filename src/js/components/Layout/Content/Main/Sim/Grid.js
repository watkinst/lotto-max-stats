import React from 'react';

import GridButtonGroup from './Grid/GridButtonGroup';

export default class Grid extends React.Component {
  render() {
    return (
      <GridButtonGroup selections={this.props.selections}
                       select={this.props.select}
                       deselect={this.props.deselect}
                       running={this.props.running}
                       length={this.props.length} />
    );
  }
}