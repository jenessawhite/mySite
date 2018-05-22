import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from "./containers/Home";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Portfolio from "./containers/Portfolio";
import Nav from "./components/Nav";
import navMenus from './utils';

class App extends Component {
  render() {
    navMenus()
    return (
      <Router>
        <main className="columns is-desktop">
          <Nav />

          <content className="column is-three-quarters-desktop">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/contact" component={Contact}/>
          </content>
        </main>
      </Router>
    );
  }
}

export default App;
