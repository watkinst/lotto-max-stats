import { EventEmitter } from 'events';
import axios from 'axios';
import Dispatcher from '../dispatcher/Dispatcher';
import Constants from '../constants/Constants';

class DataStore extends EventEmitter {
	constructor() {
		super();
		this.data = this.handleActions(Constants.JSON_DATA_FETCH);
	}

	emitChange() {
    this.emit('change');
  }

	getData() {
		return this.data;
	}

	setData(data) {
		this.data = data;
	}

  addChangeListener(callback) {
    this.on('change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }

  handleActions(action) {

	  switch(action.actionType) {

	    case Constants.JSON_DATA_FETCH:

        axios.get('./data/data.json')
          .then((response) => {
            var haveData = (this.data !== null) ? true : false;
            var dataStr = JSON.stringify(this.data);
            var respDataStr = JSON.stringify(response.data);
            if ((!haveData) || ((haveData) && (dataStr !== respDataStr))) {
              this.setData(response.data);
              this.emitChange();
            }
          })
          .catch((response) =>{
            console.log(response);
          });	      

	      break;

	    default:
	      // do nothing
	  }
	}
}

const dataStore = new DataStore;

Dispatcher.register(dataStore.handleActions.bind(dataStore));

export default dataStore;