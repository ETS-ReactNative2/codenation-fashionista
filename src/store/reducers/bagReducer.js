import { parsePriceToFloat } from "../../utils/catalog";

const initState = {
	myBag: [],
	totalPrice: 0.0,
};

const bagReducer = (state = initState, action) => {
	switch (action.type) {
		case "ADD_PRODUCT":
			console.log(state);

			const itemIndex = state.myBag.findIndex((item) => item.product === action.product);
			const myBag =
				itemIndex === -1
					? [
							...state.myBag,
							{
								product: action.product,
								amount: 1,
							},
					  ]
					: state.myBag.map((item, index) => {
							if (index === itemIndex) item.amount += 1;
							return item;
					  });
			return {
				myBag,
				totalPrice: state.totalPrice + parsePriceToFloat(action.product.actual_price),
			};

		default:
			return state;
	}
};

export default bagReducer;
