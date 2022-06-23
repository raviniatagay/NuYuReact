import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form } from 'formik';

const ContactForm = () => {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                phoneNum: '',
                email: '',
                agree: false,
                contactType: 'By Phone',
                feedback: ''
            }}
        >
            <Form>
                 <FormGroup row>   {/*1*/}
                    <Label htmlFor='firstName' md='2'>
                        First Name 
                    </Label>
                    <Col md='10'>
                        <Field className='form-control' name='firstName'></Field>
                    </Col>
                </FormGroup>
                <FormGroup row>    {/*2*/}
                    <Label htmlFor='lastName' md='2'>
                        Last Name 
                    </Label>
                    <Col md='10'>
                        <Field className='form-control' name='lastName'></Field>
                    </Col>
                </FormGroup>
                <FormGroup row>    {/*3*/}
                    <Label htmlFor='phoneNum' md='2'>
                        Phone 
                    </Label>
                    <Col md='10'>
                        <Field className='form-control' name='phoneNum'></Field>
                    </Col>
                </FormGroup>
                <FormGroup row>    {/*4*/}
                    <Label htmlFor='email' md='2'>
                        Email 
                    </Label>
                    <Col md='10'>
                        <Field className='form-control' name='email'></Field>
                    </Col>
                </FormGroup>
                <FormGroup row>    {/*5*/}
                    <Label check md={{ size: 4, offset: 2 }}>
                        <Field
                            name='agree'
                            type='checkbox'
                            className='form-check-input'
                        />{' '}
                        May we contact you?
                    </Label>                    
                    <Col md='4'>
                        <Field className='form-control' name='contactType' as='select'> 
                            <option>By Phone</option>
                            <option>By Email</option>
                        </Field>
                    </Col>
                </FormGroup>
                <FormGroup row>   {/*6*/} 
                    <Label htmlFor='feedback' md='2'>
                        Your Feedback 
                    </Label>
                    <Col md='10'>
                        <Field className='form-control' name='feedback' name='feedback' as='textarea' rows='12'></Field>
                    </Col>
                </FormGroup>
                <FormGroup row>   {/*7*/} 

                </FormGroup>
            </Form> 
        </Formik>
    );
};

export default ContactForm;