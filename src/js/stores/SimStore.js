import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/Dispatcher';
import Constants from '../constants/Constants';

class SimStore extends EventEmitter {
  constructor() {
    super();
    this.interval = null;
    this.data = {
      isRunning: false,
      numberOfDraws: 0,
      winner: false,
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
      case Constants.SIM_START:
        if ((!this.data.isRunning) &&
            (this.data.myNumbers.length == 7)) {
          this.start();
        }
        break;
      case Constants.SIM_STOP:
        if (this.data.isRunning) {
          this.stop();
        }
        break;
      case Constants.SIM_CLEAR_SELECTIONS:
        if ((!this.data.isRunning) &&
            (this.data.myNumbers.length > 0)) {
          this.clearSelections();
        }
        break;
      case Constants.SIM_CLEAR_RESULTS:
        if ((!this.data.isRunning) &&
            (this.data.numberOfDraws > 0)) {
          this.clearResults();
        }
        break;      
      case Constants.SIM_CLEAR_ALL:
        if ((!this.data.isRunning) &&
            ((this.data.numberOfDraws > 0) ||
             (this.data.myNumbers.length > 0))) {
          this.clearAll();
        }
        break;
      case Constants.SIM_SELECT_NUMBER:
        if ((!this.data.isRunning) &&
            (this.data.myNumbers.length < 7)) {
          this.select(action.selection);
        }
        break;
      case Constants.SIM_DESELECT_NUMBER:
        if ((!this.data.isRunning) &&
            (this.data.myNumbers.length >= 1)) {
          this.deselect(action.selection);
        }
        break;
      case Constants.SIM_SELECT_RANDOM_NUMBERS:
        if (!this.data.isRunning) {          
          this.random();
        }
        break;
      default:
        // do nothing
    }
  }

  start() {
    this.setRunningState(true);
    this.run();
    this.interval = setInterval(this.run.bind(this), 0);    
  }

  run() {
    if (this.data.isRunning) {

      this.incrementDrawCount();

      var drawNumbers = this.getNumbers();
      var bonusNumber = this.getBonusNumber(drawNumbers);

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
        this.setRunningState(false);
        this.setWinner(true);
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
    for (var i = 0; i < array.length; i++) {
      this.data.frequency[array[i] - 1]++
    }
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
    return array.indexOf(number) > -1;
  }

  getPercent(number) {
    return ((number / this.data.numberOfDraws) * 100).toFixed(2);
  }

  getNumbers() {
    var numbers = [];
    while (numbers.length < 7) {
      var randomInt = this.getRandomInt(1, 49);
      if (numbers.indexOf(randomInt) == -1) {
        numbers.push(randomInt);
      }
    }
    return numbers.sort(this.sortNumbers);
  }

  getBonusNumber(drawNumbers) {
    var bonusNumber = null;
    while (bonusNumber == null) {
      var randomInt = this.getRandomInt(1,49);
      if (drawNumbers.indexOf(randomInt) == -1) {
        bonusNumber = randomInt;
      }
    }    
    return bonusNumber;
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
    this.setRunningState(false);
    clearInterval(this.interval);
    console.clear();
    this.emitChange();
  }

  clearAll() {
    this.data.myNumbers = [];
    this.clearResults();
  }

  clearSelections() {
    this.data.myNumbers = [];
    this.emitChange();
  }

  clearResults() {
    this.data.matches = this.initialize(10);
    this.data.frequency = this.initialize(49);
    this.setWinner(false);
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
    this.clearResults();
  }

  random() {
    this.clearAll();
    this.data.myNumbers = this.getNumbers();
    console.log(this.data.myNumbers);
    this.emitChange();
  }
}

const simStore = new SimStore;

Dispatcher.register(simStore.handleActions.bind(simStore));

export default simStore;