import React from 'react'
import config from '../../../meta/config'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-4'>
            <h2 className='is-size-5'>Location</h2>
            <p>
              Theresa Buckley
            </p>
            <p>
              1200 South York Road Suite 4240
            </p>
            <p>Elmhurst, IL 60126
            </p>
            <p>Phone:
              <a className='is-link' href='tel:+1-630-914-4305'>
                630-914-4305
              </a>
            </p>
          </div>
          <div className='column is-4'>
            <div className='content footer-copyright has-text-centered'>
              <p>
                {config.copyright}
              </p>
            </div>
          </div>
          <div className='column is-4'>
            <h2 className='is-size-5 has-text-centered'>Follow Me on Social Media</h2>
            <p className='footer-icons has-text-centered'>
              <i className='bx bxl-linkedin-square'></i>
              <i className='bx bxl-facebook-square'></i>
              <i className='bx bxl-twitter-square'></i>
              <i className='bx bxl-instagram'></i>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
