import React, { Component } from 'react';

import helpers from './utils';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './containers/Home';
import About from './containers/About';
import Portfolio from './containers/Portfolio';
import Contact from './containers/Contact';

class App extends Component {
  render() {
    helpers();
    return (
      <div className="site-wrap container is-widescreen">
        <Nav />
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
