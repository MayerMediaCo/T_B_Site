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
              <a href='tel:+1-630-914-4305'>
                630-914-4305
              </a>
            </p>
          </div>
          <div className='column is-4'>
            <div className='content has-text-centered'>
              <p>
                {config.copyright}
              </p>
            </div>
          </div>
          <div className='column is-4'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
