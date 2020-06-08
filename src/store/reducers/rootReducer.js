import { combineReducers } from "redux";

import catalog from "./catalogReducer";
import bag from "./bagReducer";
import sidebar from "./sidebarReducer";

const rootReducer = combineReducers({
	catalog,
	bag,
	sidebar,
});

export default rootReducer;
