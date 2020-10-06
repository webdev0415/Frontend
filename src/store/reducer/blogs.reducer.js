import * as actionTypes from "../action/action_types";

const initState = {
	latest: [],
}
const blogsReducer = (state=initState, action) => {

	switch (action.type) {
		case actionTypes.LATEST_BLOGS:
	        return {
	        	...state,
	        	latest: action.payload
	        }
		default:
			return {...state}
	}
}

export default blogsReducer