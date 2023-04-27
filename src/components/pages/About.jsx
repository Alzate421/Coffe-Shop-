import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css'; // importar hoja de estilos externa

function About() {
    return (
        <Container className="my-5">
            <Row>
                <Col md={10}>
                    <h2>About Us</h2>
                    <p>
                        Café de la Montaña is a family-owned coffee shop that was founded in 1985.
                        Our mission is to provide the highest quality coffee to our customers while
                        creating a welcoming and comfortable atmosphere.
                    </p>
                    <Col md={10}>
                        <img src="https://cdn.pixabay.com/photo/2017/06/14/03/00/coffe-2400874_1280.jpg" alt="Coffee Shop Interior" className="img-fluid rounded" />
                    </Col><br />
                    <p>
                        We source our coffee beans directly from farmers in the mountains of Colombia,
                        where the cool climate and rich soil produce some of the best coffee in the world.
                        We roast our beans in-house to ensure that each cup of coffee is fresh and flavorful.
                    </p>
                    <p>
                        In addition to coffee, we also offer a variety of pastries, sandwiches, and salads
                        made with locally-sourced ingredients. Our menu is designed to complement our coffee
                        and provide our customers with a complete dining experience.
                    </p>
                </Col>

            </Row>
        </Container>
    );
}

export default About;
