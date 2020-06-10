import { getIdOfItemInBag } from "../../utils/bagFunctions";

export const addToBag = (item) => {
	const { product_id, size } = item;
	return (dispatch, getState) => {
		const { myBag } = getState().bag;
		const id = getIdOfItemInBag(myBag, product_id, size);
		dispatch(
			id !== null
				? incrementAmount(id)
				: {
						type: "ADD_PRODUCT",
						payload: item,
				  }
		);
	};
};

export const removeFromBag = (itemId) => {
	return {
		type: "REMOVE_PRODUCT",
		payload: itemId,
	};
};

export const incrementAmount = (itemId) => {
	return {
		type: "INCREMENT_PRODUCT_AMOUNT",
		payload: itemId,
	};
};

export const decrementAmount = (itemId) => {
	return {
		type: "DECREMENT_PRODUCT_AMOUNT",
		payload: itemId,
	};
};
