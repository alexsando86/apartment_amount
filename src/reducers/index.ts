import { combineReducers } from "redux";

const initialState:[] = [];

const aptReducer = (state = initialState, action:any) => {
	
	switch(action.type) {
		case "LOAD_APT_SUCCESS":
			return [...state, ...action.payload]

		case "LOAD_APT_FAIL":
			return state;
		default:
			return state;
	}
}

const rootReducer = combineReducers({aptReducer})

export default rootReducer;