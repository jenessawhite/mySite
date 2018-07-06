import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import photo from '../assets/watercolor_headshot.png';

class Home extends Component {
  render() {
    return (
      <section className="hero is-fullheight" id="home">
        <div className="hero-body animated fadeInDown">
          <div className="container has-text-centered">
            <h1>Hey there. I'm Jenessa White</h1>

            <img src={photo} alt="Jenessa White Headshot"/>
            <div className="columns">
              {/* <AnchorLink href="#about" className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="title">Who Are You?</p>
                    <p className="subtitle">Subtitle</p>
                  </div>
                </div>
              </AnchorLink>

              <AnchorLink href="#portfolio" className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="title">What Have You Done?</p>
                    <p className="subtitle">Jeff Atwood</p>
                  </div>
                </div>
              </AnchorLink> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
