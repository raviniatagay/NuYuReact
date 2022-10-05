import { Card, CardImg, CardImgOverlay, CardTitle, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const LocationCard = ({location}) => {
    const { id, image, name } = location;
    return (
        <Card>
            <Link to={`${id}`}>
                <CardImg 
                    width='100%'
                    src={image}
                    alt={name}
                />            
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
            </Link>
            <Container>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Container>            
        </Card> 
    );
}

export default LocationCard;