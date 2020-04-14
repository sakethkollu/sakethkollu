import React , {Component}from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//Components

import Header from './components/headerComponent/header'
import Footer from './components/footerComponent/footer'
import Homepage from './components/pages/homePage'
import Projects from './components/pages/projectsPage'
import Contact from './components/pages/contactPage'

//CSS
import './Assets/css/default.min.css'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
    
        <Header />

        <div className="canvas">
          <Route exact path = '/' render = { (props) => <Homepage title = "Welcome to my website"/>}/>
          <Route exact path = '/Projects' render = { (props) => <Projects title = "Projects"/>}/>
          <Route exact path = '/Contact' render = { (props) => <Contact title = "Contact"/>}/>
        </div>

        <Footer />
        
  
      </div>
      </Router>
    );
  }
}

export default App;
