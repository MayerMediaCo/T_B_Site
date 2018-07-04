import React from 'react'
import PropTypes from 'prop-types'
import {ServicesPageTemplate} from '../../templates/services-page'

const ServicesPagePreview = ({entry, widgetFor}) => (<ServicesPageTemplate
  title={entry.getIn(['data', 'title'])}
  meta_title={entry.getIn(['data', 'meta_title'])}
  meta_description={entry.getIn(['data', 'meta_description'])}
  content={widgetFor('body')}/>)

ServicesPagePreview.propTypes = {
  entry: PropTypes.shape({getIn: PropTypes.func}),
  widgetFor: PropTypes.func
}

export default ServicesPagePreview
