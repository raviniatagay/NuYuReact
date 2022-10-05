import { Col, Row } from 'reactstrap';
import PlanCard from "./PlanCard";
import { selectAllPlans } from './plansSlice';
import { useSelector } from 'react-redux';


const PlansList = () => {
    const plans = useSelector(selectAllPlans);
        
    return (
        <Row className = "ms-auto"> 
            {plans.map((plan) => {
                return (
                    <Col  
                        className='m-4' 
                        key={plan.id}
                    >
                        <PlanCard plan={plan} />
                    </Col>
                );
            })}            
        </Row>
    );
}

export default PlansList;