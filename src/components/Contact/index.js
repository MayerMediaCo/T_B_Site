import React from 'react'

const Contact = () => {
  return (
    <div className="container">
      <form name="contact" netlify>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Name"/>
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="email" placeholder="Email"/>
          </div>
        </div>
        <div classname="field">
          <label className="label">Phone</label>
          <div className="control">
            <input className="input" type="text" placeholder="(123)456-7890"/>
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

export default Contact
