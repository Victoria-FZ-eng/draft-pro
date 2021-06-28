import React from 'react';
//import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';
import Carousel from 'react-bootstrap/Carousel';


class Slider extends React.Component {
    render() {
        return (
            <>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../imgv/1140-healthy-lifestyle-beliefs-behaviors.imgcache.rev.web.700.403.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Healthy Lifestyle</h3>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../imgv/Healthy-Lifestyle.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Healthy Food with Exersicing </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../imgv/61AKZhEW-pL._AC_SL1100_.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Our Application Helps You Follow the Healthy Lifestyle</h3>
                            
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../imgv/1023270_basketball-hoop-high-quality-resolution-wallpapers-sports_1920x1080_h.jpg"
                            alt="Fourth slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../imgv/Well-7-Healthy-Habits-4p-3p-2p-B_web1.jpg"
                            alt="Fifth slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../imgv/depositphotos_249678228-stock-photo-plate-healthy-food-breakfast-lunch.jpg"
                            alt="Sixth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../imgv/istockphoto-843912990-640x640.jpg"
                            alt="Seventh slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../imgv/plate_lunch_pork_ginger_and_eggs_203768.jpg"
                            alt="Eighth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../imgv/swimming_figures_hd_picture_168203.jpg"
                            alt="Ninth slide"
                        />
                    </Carousel.Item>
                </Carousel>


            </>
        )
    }
}

export default withAuth0(Slider);