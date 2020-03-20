import React from 'react';
import './App.css';

import {
  Container,
  Col,Row
} from "react-bootstrap";
import Quiz from "./components/quiz/quiz-container";
import AboutComp from "./components/about";


function Home() {
  return (
        <Container-Fluid class="home">
                    <Container>
                        <Row className="justify-content-md-center">
                          <Col sm={12} md={12} xl={6} lg={6}>
                            {/* <Quiz  class='quiz'/> */}
                          </Col >
                        </Row>
                        <div class="About" id="about">
                            <AboutComp/>
                        </div>
                    </Container>               
        </Container-Fluid>
  );
}

export default Home;
