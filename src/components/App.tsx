import React from "react";
import NavigationMenu from "./NavigationMenu";
import Container from "react-bootstrap/esm/Container";
import Home from "./Home";
import About from "./About";
import LoadingIndicator from "./common/LoadingIndicator";
import imageUrls from "../data/image-sources";
import Rating from "./common/Rating";
import RestaurantsListItems from "./restaurants-list/RestaurantsListItem";
import RestaurantsList from "./restaurants-list/RestaurantsList";
import IRestaurant from "../models/IRestaurant";
import RestaurantsDetails from "./restaurant-details/RestaurantDetails";

const restaurant: IRestaurant = {
    "id": 1,
    "name": "Mad About Pizza",
    "description": "Delicious pizzas baked in wood-fired oven. We serve authentic Italian varieties, classic American pizzas, and desi ones too!",
    "cuisines": [
        "Italian",
        "American",
        "Fusion"
    ],
    "opens": "11:00",
    "closes": "23:30",
    "rating": 4.1,
    "numRatings": 125,
    "costForTwo": 600,
    "imageUrl": "/images/restaurants/mad-about-pizza/restaurant.jpg"
};

const App = () => {
    return (
        <>
            <NavigationMenu />
            <Container>
                {/* <Home /> */}
                {/* <About /> */}
                {/* <LoadingIndicator size="large" message="we are trying to fetch the details of restaurants. please be patient. Thank You" /> */}
                {/* <Rating value={3.75} className="me-2" />
                3.75 (120 ratings) */}
                {/* <RestaurantsListItems restaurant={restaurant} />
                 */}
                <RestaurantsList />

                {/* <RestaurantsDetails />
                 */}

            </Container>

        </>

    );
};

export default App;