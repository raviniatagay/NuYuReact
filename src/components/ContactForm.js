import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import validateContactForm from '../utils/validateContactForm';

const ContactForm = () => {
    const handleSubmit = (values, {resetForm}) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    };

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
                onSubmit = {handleSubmit}
                validate = {validateContactForm}
        >
            <Form>
                 <FormGroup row>   {/*1*/}
                    <Label htmlFor='firstName' md='2'>
                        First Name 
                    </Label>
                    <Col md='10'>
                        <Field className='form-control' name='firstName'></Field>
                        <ErrorMessage name='firstName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>    {/*2*/}
                    <Label htmlFor='lastName' md='2'>
                        Last Name 
                    </Label>
                    <Col md='10'>
                        <Field className='form-control' name='lastName'></Field>
                        <ErrorMessage name='lastName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>    {/*3*/}
                    <Label htmlFor='phoneNum' md='2'>
                        Phone 
                    </Label>
                    <Col md='10'>
                        <Field className='form-control' name='phoneNum'></Field>
                        <ErrorMessage name='phoneNum'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>    {/*4*/}
                    <Label htmlFor='email' md='2'>
                        Email 
                    </Label>
                    <Col md='10'>
                        <Field className='form-control' name='email'></Field>
                        <ErrorMessage name='email'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
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
                    <Col md={{ size: 10, offset: 2 }}>
                        <Button type='submit' color='primary'>
                            Send Feedback
                        </Button>
                    </Col>
                </FormGroup>
            </Form> 
        </Formik>
    );
};

export default ContactForm;