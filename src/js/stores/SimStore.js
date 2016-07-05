import { EventEmitter } from 'events';
import $ from 'jquery';
import Dispatcher from '../dispatcher/Dispatcher';
import Constants from '../constants/Constants';

class SimStore extends EventEmitter {
  constructor() {
    super();
    this.interval = null;
    this.data = {
      isRunning: 0,
      numberOfDraws: 0,
      winner: 0,
      myNumbers: [],
      matches: this.initialize(10),
      frequency: this.initialize(49)
    }
  }

  emitChange() {
    this.emit('change');
  }

  getData() {
    return this.data;
  }

  addChangeListener(callback) {
    this.on('change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }

  handleActions(action) {

    switch(action.actionType) {

      // NOTE: These will be conditional, i.e. - you can't start
      // the sim without first having picked 7 numbers, etc
      case Constants.SIM_START:
        this.start();
        break;
      case Constants.SIM_STOP:
        this.stop();
        break;
      case Constants.SIM_CLEAR_SELECTIONS:
        this.clearSelections();
        break;
      case Constants.SIM_CLEAR_RESULTS:
        this.clearResults();
        break;
      case Constants.SIM_CLEAR_ALL:
        this.clearAll();
        break;
      case Constants.SIM_SELECT_NUMBER:
        this.select(action.selection);
        break;
      case Constants.SIM_DESELECT_NUMBER:
        this.deselect(action.selection);
        break;
      case Constants.SIM_SELECT_RANDOM_NUMBERS:
        this.random();
        break;
      default:
        // do nothing
    }
  }

  start() {
    this.setRunningState(1);
    this.run();
    this.interval = setInterval(this.run.bind(this), 0);    
  }

  run() {
    if (this.data.isRunning) {

      this.incrementDrawCount();

      var drawNumbers = this.getNumbers();
      var bonusNumber = this.getRandomInt(1,49);

      this.updateFrequency(drawNumbers);
             
      var matchCount = this.countMatches(this.data.myNumbers, drawNumbers);
      var matchBonus = this.bonusMatched(this.data.myNumbers, bonusNumber);

      switch(matchCount) {
        case 0:
        case 1:
        case 2:
          this.data.matches[matchCount]++;          
          break;
        case 3:
          (matchBonus)
            ? this.data.matches[matchCount + 1]++
            : this.data.matches[matchCount]++;
          break;
        case 4:
        case 5:
          this.data.matches[matchCount + 1]++;
          break;
        case 6:
          (matchBonus)
            ? this.data.matches[matchCount + 2]++
            : this.data.matches[matchCount + 1]++;
          break;
        case 7:
          this.data.matches[matchCount + 2]++;
          break;
        default:
          // do nothing
      }

      this.emitChange();
      
      if (this.arraysEqual(this.data.myNumbers, drawNumbers)) {
        this.setRunningState(0);
        this.setWinner(1);
        clearInterval(this.interval);
        this.emitChange();
      }
    }
  }

  initialize(length) {
    var array = [];
    for (var i = 0; i < length; i++) {
      array.push(0);
    }
    return array;
  }

  updateFrequency(array) {
    $.each(array, this.updateFrequencyCallback.bind(this));
  }

  updateFrequencyCallback(index, element) {
    this.data.frequency[element - 1]++;
  }

  incrementDrawCount() {
    this.data.numberOfDraws++;
  }

  countMatches(a, b) {
    var matches = 0;
    for (var i = 0; i < a.length; i++) {
      if (a[i] == b[i]) {
        matches++;
      }
    }
    return matches;
  }

  bonusMatched(array, number) {
    return $.inArray(number, array) == 0;
  }

  getPercent(number) {
    return ((number / this.data.numberOfDraws) * 100).toFixed(2);
  }

  getNumbers() {
    var numbers = [];
    while (numbers.length < 7) {
      var randomInt = this.getRandomInt(1, 49);
      if ($.inArray(randomInt, numbers) == -1) {
        numbers.push(randomInt);
      }
    }
    return numbers.sort(this.sortNumbers);
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;

    for (var i = 0; i < a.length; i++) {
      if (a[i] != b[i]) return false;
    }
    return true;
  }

  sortNumbers(a, b) {
    return a - b;
  }

  setRunningState(state) {
    this.data.isRunning = state;
  }

  setNumberOfDraws(number) {
    this.data.numberOfDraws = number;
  }

  setWinner(state) {
    this.data.winner = state;
  }

  stop() {
    this.setRunningState(0);
    clearInterval(this.interval);
    this.emitChange();
  }

  clearSelections() {
    this.data.myNumbers = [];
    this.emitChange();
  }

  clearResults() {
    this.data.matches = this.initialize(10);
    this.data.frequency = this.initialize(49);
    this.setWinner(0);
    this.setNumberOfDraws(0);
    this.emitChange();
  }

  clearAll() {
    this.clearSelections();
    this.clearResults();
    this.setWinner(0);
    this.setNumberOfDraws(0);
    this.emitChange();
  }

  select(selection) {
    this.data.myNumbers.push(selection);
    this.data.myNumbers.sort(this.sortNumbers);
    this.emitChange();
  }

  deselect(selection) {
    var index = this.data.myNumbers.indexOf(selection);
    this.data.myNumbers.splice(index, 1);
    this.emitChange();
  }

  random() {
    this.data.myNumbers = this.getNumbers();
    console.log(this.data.myNumbers);
    this.emitChange();
  }
}

const simStore = new SimStore;

Dispatcher.register(simStore.handleActions.bind(simStore));

export default simStore;