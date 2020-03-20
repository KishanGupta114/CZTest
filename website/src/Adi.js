import React, { Component } from "react";

import './App.css';

import AddQuiz from './components/quiz/addQuiz';
import { Container, Row, Col } from "react-bootstrap";
import AboutComp from "./components/about";

class Adi extends Component {
    render() { 
        return ( 
            <Container-Fluid>
                <div id="home">
                </div>  
                  <div id="dq" class='App' >
                    <Container>
                        <Row className="justify-content-md-center">
                          <Col xl={6} lg={6}>
                            <AddQuiz/>
                          </Col >
                        </Row>
                        <div class="About" id="about">
                            <AboutComp/>
                        </div>
                    </Container> 
                  </div>
            </Container-Fluid>
         );
    }
}
 
export default Adi;