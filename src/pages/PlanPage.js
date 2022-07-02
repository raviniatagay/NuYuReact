import { Container } from 'reactstrap';
import PlansList from '../features/plans/PlansList';
import SubHeader from '../components/SubHeader';

const PlanPage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
            {/* <LocationsList /> */}
            <PlansList />
        </Container>
    );
};

export default PlanPage;