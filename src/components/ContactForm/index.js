import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field">

        <input type="hidden" name="form-name" value="contact"/>
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field"/>
          </label>
        </p>

        <div className="field">
          <label className="label">Name</label>
          <div className="control has-icons-left">
            <input className="input" type="text" placeholder="Name"/>
            <span className='icon is-small is-left'>
              <i className='bx bx-user'></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left">
            <input className="input" type="email" placeholder="Email"/>
            <span className='icon is-small is-left'>
              <i className='bx bx-envelope'></i>
            </span>
          </div>
        </div>
        <div classname="field">
          <label className="label">Phone</label>
          <div className="control has-icons-left">
            <input className="input" type="text" placeholder="(123)456-7890"/>
            <span className='icon is-small is-left'>
              <i className='bx bx-phone-call'></i>
            </span>
          </div>
        </div>
        <div classname="field">
          <label className="label">Subject</label>
          <div className="control">
            <textarea className="textarea" placeholder="Subject" rows="10"/>
          </div>
        </div>
        <input type="submit" value="submit" className="button form-button is-dark"/>
      </form>
    </div>
  )
}

export default ContactForm