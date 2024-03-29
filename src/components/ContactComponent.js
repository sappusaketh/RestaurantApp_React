import React, { Component } from 'react';
import {Breadcrumb,BreadcrumbItem,Row, Col, Label, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import {Control, Errors, Form} from 'react-redux-form';


const required=(val)=>val && val.length;
const maxLength=(len)=>(val)=>!(val)||val.length<=len;
const minLength=(len)=>(val)=>!(val)||val.length>=len;
const isNumber=(val)=>!(val)||!isNaN(Number(val));
const validEmail=(val)=>/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {

    constructor(props){
        super(props);

        
        this.handleSubmit=this.handleSubmit.bind(this)
        // this.validation=this.validation.bind(this)

    }

    

    handleSubmit(values){
        this.props.postFeedback(values)
        
        // alert("New State: "+ JSON.stringify(values))
        this.props.resetFeedbackForm();
        
    }

    // validation(firstname,lastname,email,telnum){

    //     const errors={
    //         firstname: '',
    //         lastname: '',
    //         telnum: '',
    //         email: ''
    //     }
    //     const reg_alpha=/^([a-zA-Z\s])+$/gm;
        
    //     if(this.state.touched.firstname===true && !reg_alpha.test(firstname)){
    //         errors.firstname="First Name contains invalid characters"
    //     }else if(this.state.touched.firstname===true && firstname.length<3){
    //         errors.firstname="First Name should contain minimum of 3 characters"
    //     }else if(this.state.touched.firstname===true && firstname.length>11){
    //         errors.firstname="First Name can only contain maximum of 10 characters"
    //     }
        
    //     if (this.state.lastname===true && reg_alpha.test(lastname)){
    //         errors.lastname = 'Last Name should be >= 3 characters';
    //     }else if (this.state.touched.lastname && lastname.length > 10){
    //         errors.lastname = 'Last Name should be <= 10 characters';
    //     }else if(this.state.touched.lastname && lastname.length < 3){
    //         errors.lastname="Last Name contains invalid characters"
    //     }

    //     const reg = /^\d{1,10}$/;
    //     if (this.state.touched.telnum && !reg.test(telnum))
    //         errors.telnum = 'Tel. Number should contain only numbers';
            
    //     if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1) 
    //         errors.email = 'Email should contain a @';
    //     return errors;
    // }




    render(){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/home">Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                Contact Us
                            </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>   
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href=" "><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form model="feedback" onSubmit={(values)=>this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label md={2} htmlFor="firstname">First Name</Label>
                                <Col md={10}>
                                    <Control.text 
                                        model=".firstname"
                                        id="firstname"
                                        name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required,minLength:minLength(3), maxLength:maxLength(15)
                                        }}
                                    />
                                    <Errors
                                    className="text-danger"
                                    model=".firstname"
                                    show="touched"
                                    messages={{
                                        required:"Required",
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                    />
                                </Col>
                                
                            </Row>

                            <Row className="form-group">
                                <Label md={2} htmlFor="lastname">Last Name</Label>
                                <Col md={10}>
                                    <Control.text 
                                        model=".lastname"
                                        id="lastname"
                                        name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required,minLength:minLength(3), maxLength:maxLength(15)
                                        }}
                                    />
                                    <Errors
                                    className="text-danger"
                                    model=".lastname"
                                    show="touched"
                                    messages={{
                                        required:"Required",
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                                </Col>
                                
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                    className="form-control"
                                        placeholder="Tel. number"
                                        validators={{
                                            required,minLength:minLength(3), maxLength:maxLength(15),isNumber
                                        }}
                                    />
                                    <Errors
                                    className="text-danger"
                                    model=".telnum"
                                    show="touched"
                                    messages={{
                                        required:"Required",
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less',
                                        isNumber:"Must be a valid Number"
                                    }}
                                />
                                </Col>
                                
                            </Row> 

                            <Row className="form-group">
                            <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                    />
                                    <Errors
                                    className="text-danger"
                                    model=".email"
                                    show="touched"
                                    messages={{
                                        required:"Required",
                                        validEmail:"invalid email address"
                                    }}
                                />
                                </Col>
                                
                            </Row> 

                            <Row className="form-group">
                                <Col md={{size:6,offset:2}} >
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" 
                                            name="agree" className="form-check-input"
                                            />{" "}
                                            <strong>Can we Contact You?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size:3,offset:1}} >
                                    <Control.select model=".contactType" className="form-control">
                                    <option>Tel.</option>
                                    <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row> 

                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" name="message"
                                        rows="12" className="form-control"
                                    />
                                </Col>
                            </Row> 

                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>       
                        </Form>
                        
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Contact;