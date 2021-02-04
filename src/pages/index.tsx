import React from "react"
import { graphql, Link } from "gatsby"
import "../styles/Main.scss"

import Layout from "../components/layout/layout"

interface Props {
  data: {
    allMarkdownRemark: any
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const IndexPage: React.FC<Props> = ({ data }: Props) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <div>
        {edges.map((edge: any) => {
          const { frontmatter } = edge.node
          return (
            <div key={frontmatter.path}>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
              &nbsp;
              <small>
                {" "}
                <em>published on</em> {frontmatter.date}
              </small>
              <p>{frontmatter.excerpt}</p>
              <br />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`

export default IndexPage
