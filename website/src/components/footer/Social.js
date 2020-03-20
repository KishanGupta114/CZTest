import React, { Component } from 'react';
import {
    Row,
    Col,
    Nav,
} from 'react-bootstrap';

import {
  AiFillInstagram,  
} from 'react-icons/ai';

import { FaGithubSquare } from "react-icons/fa";

import './style.css';

class Social extends Component{
   render() {
     return (
            <Nav  className="navbar-custom social ">
                <Nav.Link href="https://www.instagram.com/codezila" target="_blank" ><AiFillInstagram size={this.props.s} /></Nav.Link>
                <Nav.Link href="https://github.com/codezila-org" target="_blank"><FaGithubSquare size={this.props.s} /></Nav.Link>
            </Nav>
     )
   }
}

export default Social;