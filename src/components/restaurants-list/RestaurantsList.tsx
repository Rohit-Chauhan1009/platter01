import React, { Component } from "react";
import IRestaurant from "../../models/IRestaurant";
import { LoadingStatus } from "../../models/types";
import LoadingIndicator from "../common/LoadingIndicator";
import Alert from "react-bootstrap/esm/Alert";
import { Col, Row } from "react-bootstrap";
import RestaurantsListItems from "./RestaurantsListItem";

import { getRestaurants } from "../../services/restaurants";

type Props = {
};

type State = {
    status: LoadingStatus,
    restaurants?: IRestaurant[],
    error?: Error
};

// const restaurants = [
//     {
//         "id": 1,
//         "name": "Mad About Pizza",
//         "description": "Delicious pizzas baked in wood-fired oven. We serve authentic Italian varieties, classic American pizzas, and desi ones too!",
//         "cuisines": [
//             "Italian",
//             "American",
//             "Fusion"
//         ],
//         "opens": "11:00",
//         "closes": "23:30",
//         "rating": 4.1,
//         "numRatings": 125,
//         "costForTwo": 600,
//         "imageUrl": "/images/restaurants/mad-about-pizza/restaurant.jpg"
//     },
//     {
//         "id": 2,
//         "name": "Nachos & Tacos",
//         "description": "Hola Amigos! You have arrived at the right place to get some Mexican delicacies. Quesadillas, Burritos, variety of salsas, and much more. Yes, Nachos and Tacos goes without saying!",
//         "cuisines": [
//             "Mexican",
//             "Tex-Mex",
//             "Spanish"
//         ],
//         "opens": "10:00",
//         "closes": "22:30",
//         "rating": 4.3,
//         "numRatings": 89,
//         "costForTwo": 450,
//         "imageUrl": "/images/restaurants/nachos-and-tacos/restaurant.jpg"
//     },
//     {
//         "id": 3,
//         "name": "Pind da Swaad",
//         "description": "Robust flavors from the Punjab heartland served with lots of love - that's generous amounts of butter and ghee. We also serve popular chats made with tangy chutneys and savouries.",
//         "cuisines": [
//             "Punjabi",
//             "North Indian",
//             "Chats"
//         ],
//         "opens": "11:00",
//         "closes": "23:30",
//         "rating": 3.9,
//         "numRatings": 254,
//         "costForTwo": 500,
//         "imageUrl": "/images/restaurants/pind-da-swaad/restaurant.jpg"
//     },
//     {
//         "id": 4,
//         "name": "Down South",
//         "description": "Healthy breakfast options from the south of India. We serve popular South Indian tiffin items, but specialize in certain cuisines from every state of the south.",
//         "cuisines": [
//             "South Indian",
//             "Malabar",
//             "Hyderabad",
//             "Mangalore"
//         ],
//         "opens": "7:30",
//         "closes": "22:30",
//         "rating": 4.5,
//         "numRatings": 150,
//         "costForTwo": 200,
//         "imageUrl": "/images/restaurants/down-south/restaurant.jpg"
//     }
// ];


class RestaurantsList extends Component<Props, State> {
    state: State = {
        status: 'LOADING'
    };

    render() {
        let el;
        const { status, restaurants, error } = this.state;
        switch (status) {
            case 'LOADING':
                el = (
                    <LoadingIndicator
                        size="large"
                        message="We are trying to fetch the data. please wait..."
                    />
                );
                break;
            case 'LOADED':
                el = (
                    <Row xs={1} sm={2} lg={3}>
                        {
                            restaurants?.map(
                                restaurant => (
                                    <Col key={restaurant.id} className="d-flex align-items-stretch my-3">
                                        <RestaurantsListItems
                                            restaurant={restaurant}
                                        />
                                    </Col>
                                )
                            )
                        }
                    </Row>
                );
                break;
            case 'ERROR_LOADING':
                el = (
                    <Alert variant="danger my-3">
                        {error?.message}
                    </Alert>
                );
                break;
        }
        return el;
    }
    async componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         status: 'LOADED',
        //         restaurants
        //     })
        // this.setState({
        //     status: 'ERROR_LOADING',
        //     error: new Error(' something went wrong')
        // })
        // }, 2000);
        this.setState({
            status: 'LOADING'
        });
        try {
            const data = await getRestaurants();
            this.setState({
                status: 'LOADED',
                restaurants: data
            });
        } catch (error) {
            this.setState({
                status: 'ERROR_LOADING',
                error: new Error(' something went wrong')
            });
        }
    }
}


export default RestaurantsList;