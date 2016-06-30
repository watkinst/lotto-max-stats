import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/Dispatcher';
import Constants from '../constants/Constants';
import $ from 'jquery';

class DataStore extends EventEmitter {
	constructor() {
		super();
		this.data = this.handleActions(Constants.DATA_FETCH);
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

	    case Constants.DATA_FETCH:

	      $.ajax({
	        url: '../../data/data.json',
	        dataType: 'json',
	        cache: false
	      }).then (
	        (data) => {
	          if ((this.getData() === null) || ((this.getData() !== null) && (JSON.stringify(this.getData()) !== JSON.stringify(data)))) {
	            this.setData(data);
	            this.emitChange();
	          }
	        },
	        (xhr, status, err) => {
	          console.error(status, err.toString());
	        }
	      );

	      break;

	    default:
	      // do nothing
	  }
	}
}

const dataStore = new DataStore;

Dispatcher.register(dataStore.handleActions.bind(dataStore));

export default dataStore;