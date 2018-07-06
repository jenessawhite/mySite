import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section className="hero is-fullheight" id="about">
        <div className="hero-body">
          <div className="container">
            <h1>About</h1>
            <h3>
              So, I'm Jenessa (my teammates call me Extra) and I am a Front End
              Developer.
            </h3>
            <p>
              I have working with tech since I graduated from the UMN in 2014.
              So what does all that mean? I know just what people want and I
              know what they actually need (because we know they aren't always
              the same thing). I just want to make sure that they can get
              everything in the cleanest, most beautiful way possible!
            </p>

            <br />
            <h4>
              I like to live a pretty fulfilling life out side of work to
              though.
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
                  Minnesota Vixen
                </a>
              </span>
              {'! '} I joined the team for the 2018 season and have learned so
              much more about teamwork and myself than I had in a while.
              Football has taught me some skills that we even can apply to our
              everyday work flows. I also love to hang out with friends, watch
              Netflix, try out new restaurants, attend concerts/sporting events,
              and go on all types of adventures.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
