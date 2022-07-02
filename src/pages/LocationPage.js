import { Container } from 'reactstrap';
import LocationsList from '../features/locations/LocationsList';
import SubHeader from '../components/SubHeader';

const LocationPage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
            <LocationsList />
            {/* <PlansList /> */}
        </Container>
    );
};

export default LocationPage;