import { parsePriceToFloat } from "./productFunctions";

export const getBagLength = (bag) => {
	return bag.length ? bag.reduce((qntd, { amount }) => qntd + amount, 0) : 0;
};

export const getIndexOfProduct = (bag, product) => {
	return bag.findIndex((item) => JSON.stringify(item.product) === JSON.stringify(product));
};

const changePrice = (product, prevPrice, times) => {
	return prevPrice + parsePriceToFloat(product.actual_price) * times;
};

export const incrementAmount = (bag, product, prevPrice) => {
	const index = getIndexOfProduct(bag, product);
	const newBag = bag.map((item, i) => {
		if (i === index) item.amount += 1;
		return item;
	});
	const newPrice = changePrice(bag[index].product, prevPrice, 1);
	return {
		myBag: newBag,
		totalPrice: newPrice,
	};
};

export const decrementAmount = (bag, product, prevPrice) => {
	const index = getIndexOfProduct(bag, product);
	if (bag[index].amount > 1) {
		const newBag = bag.map((item, i) => {
			if (i === index) item.amount -= 1;
			return item;
		});
		const newPrice = changePrice(product, prevPrice, -1);
		return {
			myBag: newBag,
			totalPrice: newPrice,
		};
	}
	return {
		myBag: bag,
		totalPrice: prevPrice,
	};
};

export const addNewProduct = (bag, product, prevPrice) => {
	const newProduct = {
		product,
		amount: 1,
	};
	const newBag = [...bag, newProduct];
	const newPrice = changePrice(product, prevPrice, 1);
	return {
		myBag: newBag,
		totalPrice: newPrice,
	};
};

export const removeProduct = (bag, product, prevPrice) => {
	const index = getIndexOfProduct(bag, product);
	const before = bag.slice(0, index);
	const after = bag.slice(index + 1);
	const newBag = [...before, ...after];
	const newPrice = changePrice(product, prevPrice, -bag[index].amount);
	return {
		myBag: newBag,
		totalPrice: newPrice,
	};
};
