import React from "react"
import { graphql, Link } from "gatsby"

import "./blogPost.scss"
import Layout from "../components/layout/layout"

interface Props {
  data: {
    markdownRemark: any
    site: {
      siteMetadata: {
        title: string
        date: string
        path: string
        tags: string[]
        excerpt: string
      }
    }
  }
  pathContext: any
}

const Template: React.FC<Props> = ({ data, pathContext }: Props) => {
  const title = data.markdownRemark.frontmatter.title
  const date = data.markdownRemark.frontmatter.date
  const html = data.markdownRemark.html
  const { next, prev } = pathContext

  return (
    <Layout>
      <div className="blogPost">
        <div className="blogPost__title">
          <h1 className="blogPost__title-text">{title}</h1>
        </div>
        <div className="blogPost__content">
          <div className="blogPost__date">
            <em>{date}</em>
          </div>
          <div
            className="blogpost"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <div className="blogPost__link">
          <p>
            {prev && (
              <Link to={prev.frontmatter.path}>
                {prev.frontmatter.title}{" "}
                <span role="img" aria-label="point-left">
                  ⬅{" "}
                </span>
                Previous
              </Link>
            )}
          </p>
          <p>
            {next && (
              <Link to={next.frontmatter.path}>
                Next{" "}
                <span role="img" aria-label="point-right">
                  ➡
                </span>
                {next.frontmatter.title}
              </Link>
            )}
          </p>
        </div>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM, DD, YYYY")
        path
        tags
        excerpt
      }
    }
  }
`

export default Template
