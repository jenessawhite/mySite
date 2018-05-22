import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="content">
        <h1>Contact</h1>
        <p>
          Want to meet up? <strong> or </strong> Work together?
        </p>

        <p>well here's your chance...
        <br/>but don't be a douche. I'll just report you as spam and keep it pushing...</p>

        <form action="https://formspree.io/jenessaw31@gmail.com"
          method="POST">

          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" name="name" placeholder="your name" />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="email" name="_replyto" placeholder="your email"/>
            </div>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea className="textarea" type="textarea" name="message" placeholder="your message" />
            </div>
          </div>

          <input type="submit" value="Send" className="button is-primary"/>
        </form>
      </div>
    );
  }
}

export default Contact;