import { addNewItem, removeProduct, decrementAmount, incrementAmount } from "../../utils/bagFunctions";
import storage from "../localStorage";

const initState = storage.getBag() || {
	myBag: [],
	totalPrice: 0.0,
};

const bagReducer = (state = initState, action) => {
	const parameters = [state.myBag, action.payload, state.totalPrice];
	const setStorage = storage.setBag;
	let newBag;
	switch (action.type) {
		case "ADD_PRODUCT":
			newBag = addNewItem(...parameters);
			setStorage(newBag);
			return newBag;

		case "REMOVE_PRODUCT":
			newBag = removeProduct(...parameters);
			setStorage(newBag);
			return newBag;

		case "INCREMENT_PRODUCT_AMOUNT":
			newBag = incrementAmount(...parameters);
			setStorage(newBag);
			return newBag;

		case "DECREMENT_PRODUCT_AMOUNT":
			newBag = decrementAmount(...parameters);
			setStorage(newBag);
			return newBag;

		default:
			return state;
	}
};

export default bagReducer;
