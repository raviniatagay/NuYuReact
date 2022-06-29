import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import Partner from './partner';
import { selectAllPartners } from './partnersSlice';

const PartnersList = () => {
    const partners = useSelector(selectAllPartners);
    console.log(partners);

    return (
        <Col className='mt-4'>
            <Row>
                {partners.map((partner) => {
                    return (
                        <div className='d-flex mb-5 key={partner.id}'>
                            <Partner partner={partner} />
                        </div>
                    );
                })}
            </Row>
        </Col>
    );
};

export default PartnersList;