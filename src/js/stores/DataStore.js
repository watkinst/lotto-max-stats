import { EventEmitter } from 'events';

class DataStore extends EventEmitter {
	constructor() {
		super();
		this.data = {
			title: 'Lotto Max Tools',
      tagline: 'Useful tools for playing lotto max'			
		};
	}

	getData() {
		return this.data;
	}
}

const dataStore = new DataStore;

export default dataStore;