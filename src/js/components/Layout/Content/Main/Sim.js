import React from 'react';
import SimIntro from './Sim/SimIntro';
import Grid from './Sim/Grid';
import Stats from './Sim/Stats';
import SimButtonGroup from './Sim/SimButtonGroup';
import SimStore from '../../../../stores/SimStore';
import Actions from '../../../../actions/Actions';

require('../../../../../sass/sim.scss');

export default class Sim extends React.Component {

  constructor() {
    super();
    this.state = {
      data: SimStore.getData()
    };
  }

  componentDidMount() {
    SimStore.addChangeListener(this.onChange.bind(this));
    Actions.fetchSimData();
  }

  componentWillUnmount() {
    SimStore.removeChangeListener(this.onChange.bind(this));
  }

  onChange() {
    this.setState({
      data: SimStore.getData()
    });
  }

  start() {
    Actions.startSim();
  }

  stop() {
    Actions.stopSim();
  }

  clearResults() {
    Actions.clearResults();
  }

  clearSelections() {
    Actions.clearSelections();
  }

  clearAll() {
    Actions.clearAll();
  }

  select(number) {
    Actions.selectNumber(number);
  }

  deselect(number) {
    Actions.deselectNumber(number);
  }

  random() {
    Actions.selectRandomNumbers();
  }

  render() {
    const { data } = this.state;

    return (
      <div className="col-xs-12 col-md-6">
        <div className="sim-container">
          <div className="row">
            <SimIntro />
            <Stats draws={data.numberOfDraws}
                   matches={data.matches}
                   frequency={data.frequency} />
            <Grid selections={data.myNumbers}
                  select={this.select.bind(this)}
                  deselect={this.deselect.bind(this)}
                  running={data.isRunning}
                  length={data.myNumbers.length} />
            <SimButtonGroup draws={data.numberOfDraws}
                            running={data.isRunning}
                            length={data.myNumbers.length}
                            start={this.start.bind(this)}
                            stop={this.stop.bind(this)}
                            clearSelections={this.clearSelections.bind(this)}
                            clearResults={this.clearResults.bind(this)}
                            clearAll={this.clearAll.bind(this)}
                            random={this.random.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}
