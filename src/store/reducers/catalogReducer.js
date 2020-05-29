const initState = {
	loading: false,
	error: null,
	products: [],
};

const catalogReducer = (state = initState, action) => {
	switch (action.type) {
		case "LOAD_CATALOG_REQUEST":
			console.log("fetching api");
			return {
				loading: true,
				error: null,
				products: [],
			};
		case "LOAD_CATALOG_ERROR":
			console.log("fetch error:", action.err.response);
			return {
				loading: false,
				error: action.err,
				products: [],
			};
		case "LOAD_CATALOG_SUCCESS":
			console.log("fetch success");
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
