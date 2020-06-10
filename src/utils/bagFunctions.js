import { parsePriceToFloat } from "./productFunctions";
import generateId from "uniqid";
import getById from "./getById";

export const getBagLength = (bag) => {
	return bag.length ? bag.reduce((qntd, { amount }) => qntd + amount, 0) : 0;
};

export const getIdOfItemInBag = (bag, productId, size) => {
	const item = bag.find((item) => item.product_id === productId && item.size === size);
	return item === undefined ? null : item.id;
};

const changePrice = (bag, itemId, prevPrice, times) => {
	const price = parsePriceToFloat(getById(bag, itemId).unit_price);
	return prevPrice + price * times;
};

const changeAmount = (bag, itemId, prevPrice, change) => {
	const newBag = bag.map((item) => {
		if (item.id === itemId) item.amount += change;
		return item;
	});
	const newPrice = changePrice(bag, itemId, prevPrice, change);
	return {
		myBag: newBag,
		totalPrice: newPrice,
	};
};

export const incrementAmount = (bag, itemId, prevPrice) => {
	return changeAmount(bag, itemId, prevPrice, 1);
};

export const decrementAmount = (bag, itemId, prevPrice) => {
	const { amount } = getById(bag, itemId);
	return amount > 1 ? changeAmount(bag, itemId, prevPrice, -1) : { myBag: bag, totalPrice: prevPrice };
};

export const addNewItem = (bag, item, prevPrice) => {
	const newItem = {
		id: generateId(),
		...item,
		amount: 1,
	};
	const newBag = [...bag, newItem];
	const newPrice = prevPrice + parsePriceToFloat(item.unit_price);
	return {
		myBag: newBag,
		totalPrice: newPrice,
	};
};

export const removeProduct = (bag, itemId, prevPrice) => {
	const { id, amount } = getById(bag, itemId);
	const newBag = bag.filter((item) => item.id !== itemId);
	const newPrice = changePrice(bag, id, prevPrice, -amount);
	return {
		myBag: newBag,
		totalPrice: newPrice,
	};
};
