const initState = {
	loading: false,
	error: null,
	products: [],
};

const catalogReducer = (state = initState, action) => {
	switch (action.type) {
		case "LOAD_CATALOG_REQUEST":
			return {
				loading: true,
				error: null,
				products: [],
			};
		case "LOAD_CATALOG_ERROR":
			return {
				loading: false,
				error: action.err,
				products: [],
			};
		case "LOAD_CATALOG_SUCCESS":
			return {
				loading: false,
				error: null,
				products: action.products,
			};
		default:
			return state;
	}
};

export default catalogReducer;
