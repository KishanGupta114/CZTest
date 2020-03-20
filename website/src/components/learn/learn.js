import React, { Component, createRef } from 'react';
import './learn.css';
import { 
  Container, 
  Jumbotron,
  Accordion,
  Card,
  Row,
  Col,
  Badge,
  Popover,
  OverlayTrigger
} from 'react-bootstrap'
import { Table,Sticky, Ref, Segment } from 'semantic-ui-react'
import { Element, Events } from "react-scroll";

import GitProfile from '../gitProfile';

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Popover right</Popover.Title>
    <Popover.Content>
      <GitProfile user='brajpalsingh'/>
    </Popover.Content>
  </Popover>
);

const Credit = (props) => (
  <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
    <Badge variant="light" className="text-muted blockquote-footer">
      By <cite title=""><a className="text-muted" href="https://github.com/brajpalsingh">{props.name}</a></cite>
    </Badge>
  </OverlayTrigger>
);

class Learn extends Component {

  contextRef = createRef()

  componentDidMount() {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }
    
  render() {
      return (
        <Container className="card">
          <Jumbotron class="card">
            <text >
              
                <h1 className ='fnt' id='tp-name'><a href="/learn" style={{color: '#393939'}} >Variable</a></h1> 
                <Credit name="Brajpal Singh"/>
                <hr></hr>
                <p className ='fnt'>
                  A variable is nothing but a name given to a storage 
                  area that our programs can manipulate. Each variable 
                  has a specific type, which determines the size and 
                  layout of the variable's memory. 
                </p>
        
              <h2 className ='fnt' id='tp-name'>Aspects</h2>
              <hr></hr>
                <h4 className ='fnt'>Variable Declaration</h4>
                  <p className ='fnt'>
                    A variable declaration provides assurance to the compiler 
                    that there exists a variable with the given type and name 
                    so that the compiler can proceed for further compilation 
                    without requiring the complete detail about the variable.
                    A variable definition has its meaning at the time of 
                    compilation only, the compiler needs actual variable 
                    definition at the time of linking the program. We don't 
                    need to declare Variable in python. 
                  </p>
        
              <h4 className ='fnt'>Variable  Initialization</h4>
                <p className ='fnt'>
                  In c programming language, variables can be initialized in the 
                  declaration statement of any block (either it may main’s block
                  or any other function’s block). While declaring a variable you 
                  can provide a value to the variable with the assignment operator.
                </p>
              <h2 className ='fnt' id='tp-name'>Syntax</h2>
              <hr></hr>
            </text>          
          </Jumbotron>
              
            <Row>
              <Col>
                    <h5><Badge>C</Badge></h5>

                  <pre class="prettyprint">
  {`
  #include<stdio.h>
  void main() {
    //variable Declaration
    int x;
    //variable initialization
    x = 10;
    printf(“%d”,x);
  }
        
`}
                  </pre>
                  
              </Col>
              <Col>
                  <h5><Badge>Java</Badge></h5>
                  <pre class="prettyprint">
  {`
  class Codezila {
      public static void main(String args[]) {
        //variable Declaration
        int x;
        //variable initialization
        x=10;
        System.out.println(x)
      }
  }


`}
                  </pre>
                 </Col>
                <Col>                    
                 <h5><Badge>Python</Badge></h5>
                  <pre class="prettyprint">
  {`
 //No need to declare any Variable here
        
        
 //variable initialization
        
  x = 10
        
  print(x) 
         
`}
                  </pre>
                 </Col>
        </Row>
        </Container>  
    
      )
  }
}
export default Learn
