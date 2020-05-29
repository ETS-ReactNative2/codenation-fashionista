export const addToBag = (product) => {
	return {
		type: "ADD_PRODUCT",
		product,
	};
};
