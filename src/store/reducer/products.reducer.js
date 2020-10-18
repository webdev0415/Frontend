import * as actionTypes from "../action/action_types";

const initState = {
	selected: [],
	featured: [],
	recent: [],
	topsupply: [],
	weeklydeals: [],
	trending: [],
	topranking: [],
	justforyou: [],
	productdetail: []
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
	    case actionTypes.TOP_SUPPLY:
	        return {
	        	...state,
	        	topsupply: action.payload
	        }
	    case actionTypes.WEEKLY_DEALS:
	        return {
	        	...state,
	        	weeklydeals: action.payload
	        }
	    case actionTypes.TRENDING:
	        return {
	        	...state,
	        	trending: action.payload
	        }
	    case actionTypes.TOP_RANKING:
	        return {
	        	...state,
	        	topranking: action.payload
	        }
	    case actionTypes.JUST_FOR_YOU:
	        return {
	        	...state,
	        	justforyou: action.payload
	        }
	    case actionTypes.PRODUCT_DETAIL:
	        return {
	        	...state,
	        	productdetail: action.payload
	        }
		default:
			return state
	}
}

export default productsReducer