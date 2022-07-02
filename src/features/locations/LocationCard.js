import { Card, CardImg, CardImgOverlay, CardTitle, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const LocationCard = ({location}) => {
    const { id, image, name } = location;
    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg 
                    width='100%'
                    src={image}
                    alt={name}
                />
                {/* <CardImgOverlay> */}
                    {/* <CardTitle>{name}</CardTitle> */}
                {/* </CardImgOverlay> */}
                <Container>
                    <h3><b>{name}</b></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Container>
                
            </Card> 
        </Link>
    );
}

export default LocationCard;