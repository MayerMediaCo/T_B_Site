import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Offerings from '../components/Offerings'
import Testimonials from '../components/Testimonials'

import Theresa from '../img/Theresa1.jpg'
import oShot from '../img/oshot.png'

export const HomePageTemplate = ({
  title,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description}/>
    </Helmet>
    <section className='hero is-primary is-bold'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-6'>
              <div className='section'>
                <h1 className='title'>
                  {title}
                </h1>
                <h2 className="subtitle">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, explicabo?
                </h2>
                <a href="/contact" className="button is-light is-large">Contact Me</a>
              </div>
            </div>
            <div className='column is-6'>
              <div className='section hero-image'>
                <img src={Theresa} alt=""/></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <img src={oShot}/>
          </div>
        </div>
      </div>
    </section>

    <section className='section section--gradient'>
      <div className='container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <div>
                  <h3 className='has-text-weight-semibold is-size-2'>
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
                <Offerings gridItems={offerings.blurbs}/>
                <h2 className='has-text-weight-semibold is-size-2'>Testimonials</h2>
                <Testimonials testimonials={testimonials}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({blurbs: PropTypes.array}),
  testimonials: PropTypes.array
}

const HomePage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (<HomePageTemplate
    title={frontmatter.title}
    meta_title={frontmatter.meta_title}
    meta_description={frontmatter.meta_description}
    heading={frontmatter.heading}
    description={frontmatter.description}
    offerings={frontmatter.offerings}
    testimonials={frontmatter.testimonials}/>)
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({frontmatter: PropTypes.object})
  })
}

export default HomePage

export const pageQuery = graphql `
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        heading
        description
        offerings {
          blurbs {
            image
            text
          }
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
  
`
