import React, { Component } from "react";
import { Row, Jumbotron, Col } from "react-bootstrap";
import image from './../res/instructor.png';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
 


const ParallaxImage = () => (
    <Parallax className="custom-class" x={[40, -60]} y={[10,-10]} tagOuter="figure">
        <img width="60%" src={image} alt=" "/>
    </Parallax>
);



class AboutComp extends Component{
    render(){
        return(
            <Row>
                    <Col sm={12} md={8} lg={4} xl={4}>
                        <ParallaxImage/>
                    </Col>
                    <Col sm={12} md={12} lg={8} xl={8}>
                    <Jumbotron className="card">   
                        <Parallax
                        className="custom-class"
                        y={[50,-50]}>
                            <h2>About Us</h2>   
                            <hr style={{width: '50%'}}/>
                        </Parallax>                         
                        <Parallax
                        className="custom-class"
                        y={[10,-10]}>
                            <p style={{
                                color: '#000000'
                            }}>
                            CODEZILA is an Open Source community which is currently working on three programming languages C,
                            Java and Python. We tell difference between them 
                            using some quiz so student can write a C program into Java and Python and vice versa.
                            </p>
                        </Parallax>
                        
                        <p>
                        {/* <Button variant="primary">Learn more</Button> */}
                        </p>
                    </Jumbotron>
                    </Col>
            </Row>
        )
    }
}
export default AboutComp;