import React, { Component } from 'react';
import './App.css';
import logo from "./res/logo_tagline.svg";
import {
  Route,
  Switch,
  withRouter,
  BrowserRouter as Router,
} from "react-router-dom";  

import Adi from './Adi';
import Home from "./Home";
import NavBar from './components/nav/nav-bar';
import Footer from './components/footer/footer';
import Ace from './components/quiz/editor';
import { ParallaxProvider } from 'react-scroll-parallax';
import Learn from './components/learn/learn';

const Head = props =>{
  const { location } = props;
  return(
      <div class='Header' id="header" sticky='top'>
        <NavBar loc = {location} class='ontop' logo={logo} width='50%'/>
      </div>
  );
};

const Header = withRouter(Head);

function App() {
  return (
        <Container-Fluid>
            <Router  basename={process.env.PUBLIC_URL+"/"}>
                <div id="App">
                    <Header/>
                </div>                
                <div id="dq" class='App' >
                        <Switch>
                          <Route path="/" component={Home} exact/>
                          <Route path="/admin" component={Adi} exact/>
                          <Route path="/learn" component={Learn} exact/>
                          <Route path="/ed" component={Ace} exact/>
                          <Route component={Error}/>
                        </Switch>
                </div>
                <div class='footer'>      
                  <Footer/>
                </div>      
            </Router>
      </Container-Fluid>
  );
}

var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
          var currentScrollPos = window.pageYOffset;
          if (prevScrollpos === currentScrollPos) {
            document.getElementById("header").style.boxShadow = "none";
          } else {
            document.getElementById("header").style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.1)";
          }
}
class AppContainer extends Component {
    render() {
        return (
            <ParallaxProvider>
                <App />
            </ParallaxProvider>
        );
    }
}

export default AppContainer;
