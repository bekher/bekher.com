import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.css"

const HOMEPAGE_QUERY = graphql`
  query {
    file(relativePath: { eq: "home.md" }) {
      relativePath
      childMarkdownRemark {
        frontmatter {
          title
          caption
        }
        html
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
const IndexPage = () => {
  const data = useStaticQuery(HOMEPAGE_QUERY)
  const markdownData = data.file.childMarkdownRemark
  const siteName = data.site.siteMetadata.title

  return (
    <Layout>
      <SEO title="Home" />
      <header className="index-header">
        <div>
          <h1>{siteName}.</h1>
          <h2>{markdownData.frontmatter.caption}</h2>
          <div className="index-summary-container">
            <div
              className="index-summary"
              dangerouslySetInnerHTML={{
                __html: markdownData.html,
              }}
            ></div>
          </div>
        </div>
      </header>
    </Layout>
  )
}

export default IndexPage
