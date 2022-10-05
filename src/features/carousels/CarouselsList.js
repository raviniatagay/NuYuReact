import { Row } from 'reactstrap';
import { selectAllCarousels } from './carouselsSlice';
import { useSelector } from 'react-redux';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const CarouselsList = () => {
    const carousels = useSelector(selectAllCarousels);
        
    return (
        <Row className = "ms-auto"> 
            <Carousel autoPlay={true} showThumbs={false} showStatus={false} interval={1000}>
                {carousels.map(carousel => <div><img src={carousel.image} alt={carousel.name}/></div>)}
            </Carousel>    
        </Row>
    );
}

export default CarouselsList;