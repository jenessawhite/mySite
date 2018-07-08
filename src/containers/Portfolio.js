import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <section className="content hero is-fullheight" id="portfolio">
        <div className="hero-body">
          <div className="container">
            <h1>Portfolio</h1>
            <p>
              Want to know what else I've built? Check out some of the projects
              I've built or worked on below.
              <br />
              Most of what I build right now is at{' '}
              <span>
                <a href="http://softwareforgood.com">Software For Good</a>
              </span>{' '}
              since that's my job. I even write for our{' '}
              <span>
                <a href="https://softwareforgood.com/author/jenessa/">blog</a>
              </span>{' '}sometimes too!
            </p>

            <div className="tile is-ancestor">
              <div className="tile is-vertical">
                <div className="tile">
                  <div className="tile is-parent is-vertical">
                    <article className="tile is-child notification is-blue">
                      <p className="title">Can I Vote If?</p>
                      <a
                        className="subtitle"
                        href="http://canivoteif.com"
                        target="_blank"
                        rel="noopener noreferrer">
                        View
                      </a>
                      {' | '}
                      <a
                        className="subtitle"
                        href="https://github.com/Can-I-Vote-If/can-i-vote-if"
                        target="_blank"
                        rel="noopener noreferrer">
                        Code
                      </a>
                    </article>
                    <article className="tile is-child notification is-red">
                      <p className="title">Bulb-App</p>
                      <a
                        className="subtitle"
                        href="https://github.com/jenessawhite/Bulb-App"
                        target="_blank"
                        rel="noopener noreferrer">
                        Code
                      </a>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child notification is-seafoam">
                      <p className="title">3Way Marketing Group</p>
                      <a
                        className="subtitle"
                        href="http://3waymarketinggroup.com"
                        target="_blank"
                        rel="noopener noreferrer">
                        View
                      </a>
                    </article>
                  </div>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification is-grey">
                    <p className="title">MPLS Jr Devs</p>
                    <a
                      className="subtitle"
                      href="https://mplsjrdevs.com/"
                      target="_blank"
                      rel="noopener noreferrer">
                      View
                    </a>
                    {' | '}
                    <a
                      className="subtitle"
                      href="https://github.com/mplsjrdevs/mplsjrdevs"
                      target="_blank"
                      rel="noopener noreferrer">
                      Code
                    </a>
                    <div className="content">{/* <!-- Content --> */}</div>
                  </article>
                </div>
              </div>
              {/* <div className="tile is-parent">
                <article className="tile is-child notification is-orange">
                  <div className="content">
                    <p className="title">Tall tile</p>
                    <p className="subtitle">With even more content</p>
                    <div className="content"></div>
                  </div>
                </article>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
