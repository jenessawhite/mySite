import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section className="hero is-fullheight" id="about">
        <div className="hero-body">
          <div className="container">
            <h1>About</h1>
            <h3>So, I'm Jenessa (my teammates call me Extra)!</h3>
            <p>
              I am a Front End Developer based in the Twin Cities, MN. I
              enjoy creating simple, beautiful and intuitive websites that solve
              problems. Currently, I work at an amazing company called Software
              for Good in Minneapolis.
            </p>
            <br />
            <h4>
              I like to live a pretty fulfilling life outside of work too
              though...
            </h4>
            <br />

            <p>
              One of my main activities outside of the office is playing Tight
              End for the{' '}
              <span>
                <a
                  href="http://mnvixen.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  Minnesota Vixen!
                </a>
              </span>{' '}
              I joined the team for the 2018 season and have learned so much
              more about teamwork and myself than I had in a while. Football has
              taught me some skills that we even can apply to our everyday
              workflows. I also love to hang out with friends, watch Netflix,
              try out new restaurants, attend concerts/sporting events and go on
              all types of adventures.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
