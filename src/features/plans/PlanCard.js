import { Card, CardBody, CardText, CardSubtitle, CardTitle, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const PlanCard = ({plan}) => {
    const { id, name, rate, text } = plan;
    // colors = {
    //     items: [
    //       {id: 1, color: 'dodgerblue'},
    //       {id: 2, color: 'gold'},
    //       {id: 3, color: 'mediumpurple'}
    //     ]
    // }

    return (
        // <Link to={`${id}`}>
        // const { items } = this.colors;

        // {items.map((item) => {
        //     const bgColor = item.color;
            // <Card style={{background: bgColor}}>
            // <Card style={{background: 'mediumpurple'}}>
            <Card class="bg-secondary text-white">   
                <Link to={`${id}`}>                     
                    <CardBody>
                        <CardTitle tag="h3">{name}</CardTitle>
                        <CardSubtitle>${rate} per month</CardSubtitle>
                        <CardText>{text}</CardText>                    
                    </CardBody> 
                </Link>                                   
            </Card>             
        // </Link>
        // })}
    );
}

export default PlanCard;