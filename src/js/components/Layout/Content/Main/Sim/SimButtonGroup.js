import React from 'react';
import SimButton from './SimButtonGroup/SimButton';

require('../../../../../../sass/simbuttongroup.scss');

export default class SimButtonGroup extends React.Component {

  getButtonState(type) {
    var state = '';
    switch(type) {
      case 'start':
        state = (this.props.running || this.props.length < 7)
                  ? 'disabled'
                  : 'enabled';
        break;
      case 'stop':
        state = (this.props.running)
                  ? 'enabled'
                  : 'disabled';
        break;
      case 'random':
        state = (this.props.running)
                  ? 'disabled'
                  : 'enabled';
        break;
      case 'selections':
        state = (this.props.running || this.props.length < 1)
                  ? 'disabled'
                  : 'enabled';
        break;
      case 'results':
        state = (this.props.running || this.props.draws == 0)
                  ? 'disabled'
                  : 'enabled';
        break;
      case 'all':
        state = (this.props.running || this.props.length < 7 ||
                 this.props.draws == 0)
                  ? 'disabled'
                  : 'enabled';
        break;
      default:
        // do nothing
    }

    return state;
  }

  render() {    
    return (
      <div className="col-xs-12 col-sm-6">
        <div className="sim-button-group">
          <SimButton buttonState={this.getButtonState('start')}
                     text="Start"
                     action={this.props.start} />
          <SimButton buttonState={this.getButtonState('stop')}
                     text="Stop"
                     action={this.props.stop} />
          <SimButton buttonState={this.getButtonState('random')}
                     text="Quick Pick"
                     action={this.props.random} />
          <SimButton buttonState={this.getButtonState('selections')}
                     text="Clear Picks"
                     action={this.props.clearSelections} />
          <SimButton buttonState={this.getButtonState('results')}
                     text="Clear Results"
                     action={this.props.clearResults} />
          <SimButton buttonState={this.getButtonState('all')}
                     text="Clear All"
                     action={this.props.clearAll} />
        </div>
      </div>
    );
  }
}