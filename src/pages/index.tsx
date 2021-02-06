import React from "react"
import { graphql, Link } from "gatsby"
import "../styles/Main.scss"
import Img from "gatsby-image"

import Layout from "../components/layout/layout"
import Banner from "../components/banner/banner"

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
      <Banner />
      <div className="intro">
        <h2>Introduction</h2>
        <p>Hi </p>
      </div>
      <div className="home">
        {edges.map((edge: any) => {
          const { frontmatter } = edge.node
          return (
            <Link to={frontmatter.path} className="post" key={frontmatter.path}>
              <div className="post__text">
                <h2>{frontmatter.title}</h2>
                <small>
                  <em>published on</em> {frontmatter.date}
                </small>
                <p>{frontmatter.excerpt}</p>
              </div>
              <div className="post__image">
                <Img
                  fixed={frontmatter.featuredImage.childImageSharp.fixed}
                  alt={frontmatter.title}
                />
              </div>
            </Link>
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
            featuredImage {
              childImageSharp {
                fixed(width: 125, height: 125) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
