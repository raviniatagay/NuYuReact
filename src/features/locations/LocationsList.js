import { Col, Row } from 'reactstrap';
import LocationCard from "./LocationCard";
import { selectAllLocations } from './locationsSlice';
import { useSelector } from 'react-redux';

const LocationsList = () => {
    const locations = useSelector(selectAllLocations);
        
    return (
        <Row className = "ms-auto"> 
            {locations.map((location) => {
                return (
                    <Col  
                        className='m-4' 
                        key={location.id}
                    >
                        <LocationCard location={location} />
                    </Col>
                );
            })}            
        </Row>
    );
}

export default LocationsList;