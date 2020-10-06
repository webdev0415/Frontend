import * as actionTypes from "../action/action_types";

const initState = {
	selected: [],
	featured: [],
	recent: []
}
const productsReducer = (state=initState, action) => {
	switch (action.type) {
		case actionTypes.SELECTED_PRODUCTS:
	        return {
	        	...state,
	        	selected: action.payload
	        }
	    case actionTypes.FEATURED_PRODUCTS:
	        return {
	        	...state,
	        	featured: action.payload
	        }
	    case actionTypes.RECENT_PRODUCTS:
	        return {
	        	...state,
	        	recent: action.payload
	        }
		default:
			return {...state}
	}
}

export default productsReducer