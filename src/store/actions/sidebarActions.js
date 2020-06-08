export const activateSidebar = (content) => {
	return {
		type: "ACTIVATE_SIDEBAR",
		content,
	};
};

export const deactivateSidebar = () => {
	return {
		type: "DEACTIVATE_SIDEBAR",
	};
};
