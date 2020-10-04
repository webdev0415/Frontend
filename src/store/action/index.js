import axios from "axios"
import * as actionTypes from "./action_types";
import {SERVER_PORT} from "../config"

export const getSelectedProducts = dispatch => () => {
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
export const getFeaturedProducts = dispatch => () => {
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
export const getRecentProducts = dispatch => () => {
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
export const getLatestBlogs = dispatch => () => {
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
export const getDynamicAds = dispatch => () => {
    axios
    .get(`${SERVER_PORT}/api/ads/dynamic`)
    .then( res => {
        res.status === 200
        ? dispatch({type: actionTypes.DYNAMIC_ADS, payload:res.data})
        : Promise.reject(`Can"t communicate with REST API server (${res.statusText})`)
    })
    .catch(err => {
        console.log(err)
    });
}
export const getAllCategory = dispatch => () => {
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