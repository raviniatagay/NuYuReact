import { Col, Row, Container } from 'reactstrap';
import LocationCard from '../features/locations/LocationCard';
import { selectAllLocations } from '../features/locations/locationsSlice';
import { useSelector } from 'react-redux';
import SubHeader from '../components/SubHeader';
import { Link } from 'react-router-dom'; 

const LocationPage = () => {
    const locations = useSelector(selectAllLocations);
            
    return (
        <Container>
            <SubHeader current='Locations' />                 
            {locations.map((location) => {
                return (
                    <Row className = "row row-content align-items-center" key={location.id}>
                        <div class="col">
                            <div class="media">
                                <Link to={`${location.id}`}>
                                    <a data-toggle="modal" data-target="#mapLocModal"><img class="d-flex mr-3 img-thumbnail" src={location.image} alt={location.name} /></a>
                                </Link>
                                <div class="media-body align-self-center">
                                    <h3>{location.name}</h3>
                                    <p class="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </Row>
                );
            })}            
        </Container>            
    );
};

export default LocationPage;