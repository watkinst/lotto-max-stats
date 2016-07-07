import React from 'react';
import Intro from './Sim/Intro';
import Grid from './Sim/Grid';
import Stats from './Sim/Stats';
import ButtonGroup from './Sim/ButtonGroup';
import SimStore from '../../../../stores/SimStore';
import Actions from '../../../../actions/Actions';

export default class Sim extends React.Component {

  constructor() {
    super();
    this.state = {
      data: SimStore.getData()
    };
  }

  componentWillMount() {
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

  reset() {
    Actions.reset();
  }

  select() {
    Action.selectNumber();
  }

  deselect() {
    Actions.deselectNumber();
  }

  random() {
    Actions.selectRandomNumbers();
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <Intro />
        <Grid selections={data.myNumbers} />
        <Stats draws={data.numberOfDraws}
               matches={data.matches}
               frequency={data.frequency} />
        <ButtonGroup running={data.isRunning}
                     length={data.myNumbers.length}
                     start={this.start.bind(this)}
                     stop={this.stop.bind(this)}
                     reset={this.reset.bind(this)}
                     select={this.select.bind(this)}
                     deselect={this.deselect.bind(this)}
                     random={this.random.bind(this)} />
      </div>
    );
  }
}
