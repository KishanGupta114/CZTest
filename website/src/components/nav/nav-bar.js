import React, { Component } from "react";
import './navStyle.css' ;
import {
    Navbar,
    Nav,
} from 'react-bootstrap';
import NavItem from './nav-item';


class NavBar extends Component{
    render(){
        return (
            <Navbar collapseOnSelect expand="lg" bg="#fff" variant="light">
                <Navbar.Brand  href="/"><img width={this.props.width} height={this.props.height} src={this.props.logo} alt='CODEZILA'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <NavItem location = {this.props.loc}/>
                    <Nav class="navbar-custom">
                    <Nav.Link disabled eventKey={2} href="#">
                        Login
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>      
        )
    }
}

export default NavBar;