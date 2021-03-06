import Dispatcher from '../dispatcher/Dispatcher';
import Constants from '../constants/Constants';

var Actions = {
  fetchJsonData: () => {
    Dispatcher.dispatch({
      actionType: Constants.JSON_DATA_FETCH
    });
  },
  fetchSimData: () => {
    Dispatcher.dispatch({
      actionType: Constants.SIM_DATA_FETCH
    });
  },
  startSim: () => {
    Dispatcher.dispatch({
      actionType: Constants.SIM_START
    });
  },
  stopSim: () => {
    Dispatcher.dispatch({
      actionType: Constants.SIM_STOP
    });
  },
  clearSelections: () => {
    Dispatcher.dispatch({
      actionType: Constants.SIM_CLEAR_SELECTIONS
    });
  },
  clearResults: () => {
    Dispatcher.dispatch({
      actionType: Constants.SIM_CLEAR_RESULTS
    });
  },
  clearAll: () => {
    Dispatcher.dispatch({
      actionType: Constants.SIM_CLEAR_ALL
    });
  },
  selectNumber: (number) => {
    Dispatcher.dispatch({
      actionType: Constants.SIM_SELECT_NUMBER,
      selection: number
    });
  },
  deselectNumber: (number) => {
    Dispatcher.dispatch({
      actionType: Constants.SIM_DESELECT_NUMBER,
      selection: number
    });
  },
  selectRandomNumbers: () => {
    Dispatcher.dispatch({
      actionType: Constants.SIM_SELECT_RANDOM_NUMBERS
    });
  }
};

export default Actions;