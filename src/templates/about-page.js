import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Content, { HTMLContent } from '../components/Content'
import { Helmet } from 'react-helmet'

export const AboutPageTemplate = ({ 
  title,
  image,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content
 
  console.log({ image })
  return (
    <section className="section section--gradient">
      <div className="container">

        <div className="columns">
          <div className="column">
            <Banner image={image} title={title} />
          </div>
        </div>

        <PageContent className="content" content={content} />

        {/* <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
            </div>
          </div>
        </div> */}

      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Helmet>
          <meta charSet="utf-8" />
          <title>A propos de nous</title>
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
