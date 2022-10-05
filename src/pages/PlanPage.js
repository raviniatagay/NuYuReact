import { Container } from 'reactstrap';
import PlansList from '../features/plans/PlansList';
import SubHeader from '../components/SubHeader';

const PlanPage = () => {
    return (
        <Container>
            <SubHeader current='Membership' />
            <PlansList />
        </Container>
    );
};

export default PlanPage;