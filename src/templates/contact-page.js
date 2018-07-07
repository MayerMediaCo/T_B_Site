import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ContactForm from '../components/ContactForm'
import Contact from '../components/Contact'
import Map from '../components/Map'

export const ContactPageTemplate = ({title, subtitle, meta_title, meta_description, contacts}) => {
  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description}/>
      </Helmet>
      <section className='hero is-primary is-bold'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title'>
                    {title}
                  </h1>
                  <h2 className='subtitle'>
                    {subtitle}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-6'>
              <div className='contact-form'>
                <ContactForm/>
              </div>
            </div>
            <div className='column is-6'>
              <div className='map-section'>
                <div className='is-size-3 has-text-centered'>
                  <h1>Find me here</h1>
                </div>
                <div className='map is-1by1'>
                  <Map/>
                </div>
                <div>
                  <p>Address: 1200 South York Road Suite 4240 Elmhurst, IL 60126</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section'>
        <div className="container">
          <div className='has-text-centered is-size-3'>
            <h1>
              Find me on Social Media</h1>
          </div>
          <div>
            <p className='contact-icons has-text-centered'>
              <i className='bx bxl-linkedin-square'></i>
              <i className='bx bxl-facebook-square'></i>
              <i className='bx bxl-twitter-square'></i>
              <i className='bx bxl-instagram'></i>
            </p>
          </div>
        </div>
      </section>

      <section className='section'>
        <div className='container'>
          {contacts.map((contact, id) => <Contact key={id} email={contact.email} description={contact.description}/>)}
        </div>
      </section>
    </div>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  contacts: PropTypes.array
}

const ContactPage = ({data}) => {
  const {frontmatter} = data.markdownRemark
  return (<ContactPageTemplate
    title={frontmatter.title}
    subtitle={frontmatter.subtitle}
    meta_title={frontmatter.meta_title}
    meta_description={frontmatter.meta_description}
    contacts={frontmatter.contacts}/>)
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({frontmatter: PropTypes.object})
  })
}

export default ContactPage

export const contactPageQuery = graphql `
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        meta_title
        meta_description
        heading
        contacts {
          email
          description
        }
      }
    }
  }
`
