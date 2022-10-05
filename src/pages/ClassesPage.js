import SubHeader from '../components/SubHeader';
import { Col, Container, Form, FormGroup, Label, Input, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import { selectAllClasses } from '../features/classes/classesSlice';
import { selectAllLocations } from '../features/locations/locationsSlice';


const ClassesPage = () => {
    const locations = useSelector(selectAllLocations);
    const classes = useSelector(selectAllClasses); 

    return (
        <Container>
            <SubHeader current='Classes' />
            <Form>
                <FormGroup>
                    <Col>
                        <Label for="locationSelect">Location</Label>
                    </Col>
                    <Col>
                        <Input type="select" name="select" id="locationSelect">
                            {locations.map((location) => {
                                return (
                                    <option>{location.name}</option>
                                );
                            })}
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col>
                        <Label for="classSelect">Class</Label>
                    </Col>
                    <Col>
                        <Input type="select" name="select" id="classSelect">
                            {classes.map((wclass) => {
                                return (
                                    <option>{wclass.name}</option>
                                );
                            })}
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col>
                        <Label for="dateSelect">Date</Label>
                    </Col>
                    <Col>
                        <Input type="date" name="date" id="dateSelect" />
                    </Col>
                </FormGroup>
            </Form>
            {classes.map((wclass) => {
                return (
                    <Row className = "row row-content align-items-center" key={wclass.id}>
                        <Col col-sm-4>                                                           
                            <img class="img2" src={wclass.image} alt={wclass.name} width="100" height="100"/>
                        </Col>
                        <Col col-sm-8>
                            <div class="media-body align-self-center">
                                <h3>{wclass.name}</h3>
                                <p class="d-none d-sm-block">{wclass.description}</p>
                            </div>                     
                        </Col>
                    </Row>
                );
            })};
        </Container>
    );
};

export default ClassesPage;