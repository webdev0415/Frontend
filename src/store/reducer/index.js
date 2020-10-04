import {combineReducers} from "redux";
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import productsReducer from "./products.reducer.js"
import blogsReducer from "./blogs.reducer.js"
import utilsReducer from "./utils.reducer.js"

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['products', 'blogs', 'utils',]
}

const rootReducer =  combineReducers({
	products: productsReducer,
	blogs: blogsReducer,
	utils: utilsReducer,
})

export default persistReducer(persistConfig, rootReducer)