import React, { Component } from 'react';
import {
    Row,
    Col,
    Nav,
} from 'react-bootstrap';

import './style.css';

class FooterItem extends Component{

   render() {
     return (
       <Row>
         <Col sm={4} md={4} lg={4} xl={4}>
            <Nav  className="navbar-custom flex-column">
                <Nav.Link href="#about" >About Us</Nav.Link>
                <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
         </Col>
         <Col sm={4} md={4} lg={4} xl={4}>
            <Nav className="navbar-custom flex-column">
                <Nav.Link href="#dq">Daily Quiz</Nav.Link>
                <Nav.Link href="#action/3.2">Saturday Task</Nav.Link>
                <Nav.Link href="#action/3.3">Sunday Contest</Nav.Link>
            </Nav>
         </Col>
       </Row>
     )
   }
}

export default FooterItem;