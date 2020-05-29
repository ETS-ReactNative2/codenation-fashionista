import { parsePriceToFloat } from "../../utils/catalog";

const initState = {
	myBag: [],
	totalPrice: 0.0,
};

const bagReducer = (state = initState, action) => {
	switch (action.type) {
		case "ADD_PRODUCT":
			console.log(state);

			return {
				myBag: [...state.myBag, action.product],
				totalPrice: state.totalPrice + parsePriceToFloat(action.product.actual_price),
			};
		default:
			return state;
	}
};

export default bagReducer;
