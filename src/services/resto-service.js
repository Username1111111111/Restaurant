export default class RestoService {

	constructor() {
		this._apiBase = 'http://localhost:3004';
	}

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
}
