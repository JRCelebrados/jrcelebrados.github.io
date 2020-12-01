import React, { Component } from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch, Link, NavLink, Redirect} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';

class App extends Component {

  render() {
    return(
      <Router>

        <div className="App">

          <header>

            <div class="header-container">
              <div class="logo"></div>
              <div class="title"></div>
              <div class="filler-transparent-white"></div>
            </div>

            <div class="nav-container">

              <div class="filler-blank"></div>

              <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/projects">Projects</Link></li>
                  <li><Link to="/about-me">About Me</Link></li>
                  <li><Link to="contact-me">Contact Me</Link></li>
                </ul>
              </nav>

              <div class="filler-blank"></div>

            </div>

          </header>

          <div class="body-container">
            <div class="left-border"></div>
            <div class="main-body">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/about-me" component={AboutMe} />
                <Route path="/contact-me" component={ContactMe}/>
              </Switch>
            </div>
            <div class="right-border"></div>
          </div>

        </div>

      </Router>
    );
  }
}

export default App;
