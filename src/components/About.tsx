import { faLink, faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListGroup } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import ImageSource from "../models/ImageSource";
import { getImageSources } from "../services/about";
// import imageUrls from "../data/image-sources";


const About = () => {
    const [imageUrls, setImageUrls] = useState<ImageSource[]>([]);

    useEffect(
        () => {
            const fetchImageSources = async () => {
                getImageSources()
                    .then(data => setImageUrls(data))
                    .catch(error => alert(error.message));
            };
            fetchImageSources();
        },
        []

    );

    return (
        <main>
            <section className="my-5">
                <header>
                    <h2>
                        <FontAwesomeIcon icon={faLink} className="me-2" />
                        Attributions
                    </h2>
                </header>
                <p>
                    The author would like to thank <a href="https://pixlr.com/x/" target="_blank" rel="noreferrer">Pixlr</a> for providing an awesome free photo-editing tool online. The author also Rohit chauhan learning but ming getting somewhere else.
                </p>
                <ListGroup>
                    {
                        imageUrls.map(
                            (imageUrl, idx) => (
                                <ListGroup.Item key={imageUrl}>
                                    <a href={imageUrl}>{imageUrl}</a>
                                    { }
                                </ListGroup.Item>
                            )
                        )
                    }
                </ListGroup>
            </section>

        </main>
    )
};

export default About;