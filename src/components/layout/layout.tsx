import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header"
import Footer from "../footer"
import "./layout.scss"

interface Props {
  children?: any
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="layout">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
