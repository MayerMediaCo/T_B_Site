import React from 'react'
import config from '../../../meta/config'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-4'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
