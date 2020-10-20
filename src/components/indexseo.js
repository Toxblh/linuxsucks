import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ description, lang, meta, title }) => {
  const data = useStaticQuery(graphql`
    query indexSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const {
    title: siteTitle,
    description: siteDescription,
    author,
  } = data.site.siteMetadata
  const metaTitle = title || siteTitle
  const metaDescription = description || siteDescription


  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={title ? `${title} :: ${siteTitle}` : siteTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        ]

      }
    />
  )
}


SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string,
}

export default SEO
