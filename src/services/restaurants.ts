import axios from "axios";
import ImageSource from "../models/ImageSource";
import imageUrls from "../data/image-sources";
import IRestaurant from "../models/IRestaurant";

const getRestaurants = () => {
    return axios.get<IRestaurant[]>( `${process.env.REACT_APP_API_BASE_URL}/restaurants` )
        .then( response => response.data ) 
};

const getRestaurantsById = ( id : number) => {
    return axios.get<IRestaurant[]>( `${process.env.REACT_APP_API_BASE_URL}/restaurants/id` )
        .then( response => response.data ) 
};

export {
    getRestaurants,
    getRestaurantsById
};