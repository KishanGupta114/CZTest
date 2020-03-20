import React, { Component } from "react";
import { 
    Jumbotron,
    Button,
    Row, Col,
    ToggleButton,
    ButtonGroup
 } from "react-bootstrap";


 class Quiz extends Component{
     render(){
         return(
                <Jumbotron className="card center justify-content-center">
                    <Row>
                        <h1>Hello, world!</h1>
                    </Row>
                    <Row>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                    
                    </Row>
                    <Row className="justify-content-center text-center">
                            <ButtonGroup toggle className="btn-lg mt-3">
                                <Row className="justify-content-lg-center text-center">
                                    <Col auto xs={6} sm={6} lg={6} xl={6}>
                                        <ToggleButton type="radio" name="radio"  value="1">
                                        Option 1
                                        </ToggleButton>
                                    </Col>
                                    <Col auto>
                                        <ToggleButton type="radio" name="radio" value="2">
                                        Option 2
                                        </ToggleButton>
                                    </Col>
                                    <Col auto xs={6} sm={6}>
                                        <ToggleButton type="radio" name="radio" value="3">
                                        Option 3
                                        </ToggleButton>
                                    </Col>
                                    <Col auto>
                                        <ToggleButton type="radio" name="radio" value="2">
                                        Option 4
                                        </ToggleButton>
                                    </Col>
                                </Row>
                                
                                
                                </ButtonGroup>
                            </Row>
                    <Row className="justify-content-center text-center">
                        <Button as="input" type="submit" value="Submit" />
                    </Row>
                </Jumbotron>
         )
     } 
 }
 export default Quiz;