import { combineReducers } from "redux";

import catalog from "./catalogReducer";
import bag from "./bagReducer";

const rootReducer = combineReducers({
	catalog,
	bag,
});

export default rootReducer;
