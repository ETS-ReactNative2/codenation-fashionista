const initState = {
	active: false,
	content: null,
};

const sidebarReducer = (state = initState, action) => {
	switch (action.type) {
		case "ACTIVATE_SIDEBAR":
			return {
				active: true,
				content: action.content,
			};
		case "DEACTIVATE_SIDEBAR":
			return {
				active: false,
				content: null,
			};

		default:
			return state;
	}
};

export default sidebarReducer;
