import axios from "axios"
import * as actionTypes from "./action_types";
import {SERVER_PORT} from "../config"

export const getSelectedProducts = () => {
    return dispatch => {
        axios
        .get(`${SERVER_PORT}/api/products/selected`)
        .then( res => {
            console.log("res", res)
            res.status === 200
            ? dispatch({type: actionTypes.SELECTED_PRODUCTS, payload:res.data})
            : Promise.reject(`Can"t communicate with REST API server (${res.statusText})`)
        })
        .catch(err => {
            console.log(err)
        });
    }
    

}
export const getFeaturedProducts = () => {
    return dispatch => {
        axios
        .get(`${SERVER_PORT}/api/products/featured`)
        .then( res => {
            res.status === 200
            ? dispatch({type: actionTypes.FEATURED_PRODUCTS, payload:res.data})
            : Promise.reject(`Can"t communicate with REST API server (${res.statusText})`)
        })
        .catch(err => {
            console.log(err)
        });
    }
    

}
export const getRecentProducts = () => {
    return dispatch => {
        axios
        .get(`${SERVER_PORT}/api/products/recent`)
        .then( res => {
            res.status === 200
            ? dispatch({type: actionTypes.RECENT_PRODUCTS, payload:res.data})
            : Promise.reject(`Can"t communicate with REST API server (${res.statusText})`)
        })
        .catch(err => {
            console.log(err)
        });
    }
    

}
export const getLatestBlogs = () => {
    return dispatch => {
        axios
        .get(`${SERVER_PORT}/api/blog/latest`)
        .then( res => {
            res.status === 200
            ? dispatch({type: actionTypes.LATEST_BLOGS, payload:res.data})
            : Promise.reject(`Can"t communicate with REST API server (${res.statusText})`)
        })
        .catch(err => {
            console.log(err)
        });
    }
    
}
export const getDynamicAds = () => {
    return dispatch => {
        axios
        .get(`${SERVER_PORT}/api/banners/dynamic`)
        .then( res => {
            res.status === 200
            ? dispatch({type: actionTypes.DYNAMIC_ADS, payload:res.data})
            : Promise.reject(`Can"t communicate with REST API server (${res.statusText})`)
        })
        .catch(err => {
            console.log(err)
        });
    }
    
}
export const getAllCategory = () => {
    return dispatch => {
        axios
        .get(`${SERVER_PORT}/api/categories/all`)
        .then( res => {
            res.status === 200
            ? dispatch({type: actionTypes.ALL_CATEGORY, payload:res.data})
            : Promise.reject(`Can"t communicate with REST API server (${res.statusText})`)
        })
        .catch(err => {
            console.log(err)
        });
    }
    
}
export const getTopSuppliers = () => {
    return dispatch => {
        axios
        .get(`${SERVER_PORT}/api/suppliers/top`)
        .then( res => {
            res.status === 200
            ? dispatch({type: actionTypes.TOP_SUPPLY, payload:res.data})
            : Promise.reject(`Can"t communicate with REST API server (${res.statusText})`)
        })
        .catch(err => {
            console.log(err)
        });
    } 
}
export const getWeeklyDeals = () => {
    return dispatch => {
        axios
        .get(`${SERVER_PORT}/api/deals/weekly`)
        .then( res => {
            res.status === 200
            ? dispatch({type: actionTypes.WEEKLY_DEALS, payload:res.data})
            : Promise.reject(`Can"t communicate with REST API server (${res.statusText})`)
        })
        .catch(err => {
            console.log(err)
        });
    } 
}
export const getTrending = () => {
    return dispatch => {
        axios
        .get(`${SERVER_PORT}/api/explore/trending`)
        .then( res => {
            res.status === 200
            ? dispatch({type: actionTypes.TRENDING, payload:res.data})
            : Promise.reject(`Can"t communicate with REST API server (${res.statusText})`)
        })
        .catch(err => {
            console.log(err)
        });
    } 
}
export const getTopRanking = () => {
    return dispatch => {
        axios
        .get(`${SERVER_PORT}/api/products/top`)
        .then( res => {
            res.status === 200
            ? dispatch({type: actionTypes.TOP_RANKING, payload:res.data})
            : Promise.reject(`Can"t communicate with REST API server (${res.statusText})`)
        })
        .catch(err => {
            console.log(err)
        });
    } 
}
export const getJustForYou = () => {
    return dispatch => {
        axios
        .get(`${SERVER_PORT}/api/products/personal?owner=1`)
        .then( res => {
            res.status === 200
            ? dispatch({type: actionTypes.JUST_FOR_YOU, payload:res.data})
            : Promise.reject(`Can"t communicate with REST API server (${res.statusText})`)
        })
        .catch(err => {
            console.log(err)
        });
    } 
}
export const getProductDetail = () => {
    return dispatch => {
        axios
        .get(`${SERVER_PORT}/api/products/single?id=1337`)
        .then( res => {
            res.status === 200
            ? dispatch({type: actionTypes.PRODUCT_DETAIL, payload:res.data})
            : Promise.reject(`Can"t communicate with REST API server (${res.statusText})`)
        })
        .catch(err => {
            console.log(err)
        });
    } 
}