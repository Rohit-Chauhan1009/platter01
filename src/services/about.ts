import axios from "axios";
import ImageSource from "../models/ImageSource";
// import imageUrls from "../data/image-sources";

const getImageSources = () => {
    return axios.get<ImageSource[]>( `${process.env.REACT_APP_API_BASE_URL}/images-sources` )
        .then( response => response.data ) 
};

export {
    getImageSources
};