const key = "@codenation-fashionista/bag";

export default {
	getBag: () => {
		const bag = localStorage.getItem(key);
		return bag ? JSON.parse(bag) : null;
	},
	setBag: (bag) => localStorage.setItem(key, JSON.stringify(bag)),
};
