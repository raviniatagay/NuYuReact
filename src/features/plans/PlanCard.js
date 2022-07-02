import { Card, CardImg, CardImgOverlay, CardTitle, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const PlanCard = ({plan}) => {
    const { id, name, rate, text } = plan;
    return (
        <Link to={`${id}`}>
            <Card>
                {/* <CardImg 
                    width='100%'
                    src={image}
                    alt={name}
                /> */}
                {/* <CardImgOverlay> */}
                    {/* <CardTitle>{name}</CardTitle> */}
                {/* </CardImgOverlay> */}
                <Container>
                    <h3><b>{name}</b></h3>
                    <p>${rate} per month</p>
                    <p>{text}</p>
                </Container>                
            </Card> 
        </Link>
    );
}

export default PlanCard;