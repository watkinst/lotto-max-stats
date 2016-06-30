import Dispatcher from '../dispatcher/Dispatcher';
import Constants from '../constants/Constants';

var Actions = {
  fetchData: function() {
    Dispatcher.dispatch({
      actionType: Constants.DATA_FETCH
    });
  }
};

export default Actions;