export default class RestoService {

	constructor() {
		//this._apiBase = 'http://localhost:4000';
		this._apiBase = 'https://restaurant-app-test-demo.herokuapp.com';
		
	}

	// GET -----------
	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status ${res.status}`);
		}

		return await res.json();
	}

	getMenuItem = async (id) => {
		const menuItem = await this.getResource(`/menu/${id}`);
		return menuItem;
	}

	getMenuItems = async () => {
		const menuItems = await this.getResource(`/menu/`);
		return menuItems;
	}

	getFreeOrderId = async () => {
		const orders = await this.getResource('/orders/');
		if (orders.length === 0 || orders === undefined) {
			return 1;
		} else {
			for (let i = 0; i <= orders.length + 1; i++) {
				if (orders[i].id !== i+1 ) {
					return i;
				}
			}
		}
	}

	// POST -----------
	async __postData(url = '', data = {}) {
		// Default options are marked with *
		const response = await fetch(url, {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			redirect: 'follow', // manual, *follow, error
			referrerPolicy: 'no-referrer', // no-referrer, *client
			body: JSON.stringify(data) // body data type must match "Content-Type" header
		});
		return await response.json(); // parses JSON response into native JavaScript objects
	}

	sendOrder = async (data = {}) => {
		// const freeId = await this.getFreeOrderId();
		const url = `${this._apiBase}/orders/`;
		
		const res = await this.__postData(url, data);

		// if (!res.ok) {
		// 	throw new Error(`Could not fetch ${url}, status ${res.status}`);
		// }
	}
}