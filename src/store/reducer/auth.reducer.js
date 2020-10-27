import * as actionTypes from "../action/action_types";
const isEmpty = require("is-empty");

const initState = {
	user: [],
	isAuthenticated: false,
	userprofile: [],
}
const blogsReducer = (state=initState, action) => {

	switch (action.type) {
		case actionTypes.SET_CURRENT_USER:
	        return {
	        	...state,
	        	user: action.payload,
	        	isAuthenticated: !isEmpty(action.payload)
	        }
	    case actionTypes.ACCOUNT_DETAIL:
	        return {
	        	...state,
	        	userprofile: action.payload
	        }
		default:
			return state
	}
}

export default blogsReducer