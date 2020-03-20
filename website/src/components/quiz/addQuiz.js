import React, { Component } from 'react';

import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import {
    Jumbotron,
    Form,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import { TextArea } from 'semantic-ui-react';
import Ace from './editor';

const code = "null";

class AddQuiz extends Component{   
    state = { code };
        render() {
            return(
                <Jumbotron className="justify-content-center">
                    <Form noValidate >
                        <Row className="justify-content-center">
                            <Ace className="questionInput"/>
                        </Row>
                        <Row className="justify-content-lg-center text-center">
                            <Col xs={12} sm={12} lg={6} xl={6}>
                                <input type="text" className="answerInput " placeholder="Right Option"/>
                            </Col>
                            <Col xs={12} sm={12} lg={6} xl={6}>
                                <input type="text" className="optionInput" placeholder="Option 1"/>
                            </Col>
                            <Col xs={12} sm={12} lg={6} xl={6} >
                                <input type="text" className="optionInput" placeholder="Option 2"/>
                            </Col>
                            <Col s={12} sm={12} lg={6} xl={6}>
                                <input type="text" className="optionInput" placeholder="Option 3"/>
                            </Col>
                        </Row>
                         <Row className="justify-content-center  text-center">
                            <Button as="input" type="submit" value="Submit" />
                        </Row>
                    </Form>
                </Jumbotron>
            )
        }
}

export default AddQuiz;