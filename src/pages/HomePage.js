import { Container } from 'reactstrap';
// import DisplayList from '../features/display/DisplayList';
import LocationsList from '../features/locations/LocationsList';
import PlansList from '../features/plans/PlansList';
import SubHeader from '../components/SubHeader';

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
            <LocationsList />
            <PlansList />
        </Container>
    );
};

export default HomePage;