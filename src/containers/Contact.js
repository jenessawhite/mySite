import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <section className="hero is-fullheight" id="contact">
        <div className="hero-body">
          <div className="container">
            <h1>Contact</h1>
            <p>
              Want to meet up? <strong> or </strong> Work together?
            </p>

            <p>
              Well here's your chance!
              <br />
              Don't be a douche.​..​I'll just report you as spam and keep it
              pushing.
            </p>

            <br />
            <div className="container">
              <form
                action="https://formspree.io/jenessaw31@gmail.com"
                method="POST">
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="name"
                      placeholder="Who are you?"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      name="_replyto"
                      placeholder="How do I reach you?"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      type="textarea"
                      name="message"
                      placeholder="What's on your mind?"
                    />
                  </div>
                </div>

                <input
                  type="submit"
                  value="Send"
                  className="button is-primary"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
