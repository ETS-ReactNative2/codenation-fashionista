import { getIndexOfProduct } from "../../utils/bagFunctions";

export const addToBag = (product) => {
	return (dispatch, getState) => {
		const { myBag } = getState().bag;
		const index = getIndexOfProduct(myBag, product);
		if (index >= 0) {
			dispatch({ type: "INCREMENT_PRODUCT_AMOUNT", product });
		} else {
			dispatch({ type: "ADD_PRODUCT", product });
		}
	};
};

export const removeFromBag = (product) => {
	return {
		type: "REMOVE_PRODUCT",
		product,
	};
};

export const incrementAmount = (product) => {
	return {
		type: "INCREMENT_PRODUCT_AMOUNT",
		product,
	};
};

export const decrementAmount = (product) => {
	return {
		type: "DECREMENT_PRODUCT_AMOUNT",
		product,
	};
};
