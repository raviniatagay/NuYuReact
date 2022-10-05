import { Container } from 'reactstrap';
import CarouselsList from '../features/carousels/CarouselsList';
import LocationsList from '../features/locations/LocationsList';
import PlansList from '../features/plans/PlansList';
import SubHeader from '../components/SubHeader';

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
            <CarouselsList />
            <LocationsList />
            <PlansList />
        </Container>
    );
};

export default HomePage;