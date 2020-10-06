import * as actionTypes from "../action/action_types";

const initState = {
	ads: [],
	cateroty: [],
}
const utilsReducer = (state=initState, action) => {

	switch (action.type) {
		case actionTypes.DYNAMIC_ADS:
	        return {
	        	...state,
	        	ads: action.payload
	        }
	    case actionTypes.ALL_CATEGORY:
	        return {
	        	...state,
	        	cateroty: action.payload
	        }
		default:
			return state
	}
}

export default utilsReducer