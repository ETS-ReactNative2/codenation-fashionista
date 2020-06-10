import { addNewItem, removeProduct, decrementAmount, incrementAmount } from "../../utils/bagFunctions";

const initState = {
	myBag: [],
	totalPrice: 0.0,
};

const bagReducer = (state = initState, action) => {
	const parameters = [state.myBag, action.payload, state.totalPrice];
	switch (action.type) {
		case "ADD_PRODUCT":
			return addNewItem(...parameters);

		case "REMOVE_PRODUCT":
			return removeProduct(...parameters);

		case "INCREMENT_PRODUCT_AMOUNT":
			return incrementAmount(...parameters);

		case "DECREMENT_PRODUCT_AMOUNT":
			return decrementAmount(...parameters);

		default:
			return state;
	}
};

export default bagReducer;
