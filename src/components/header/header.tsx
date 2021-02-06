import { Link } from "gatsby"
import React from "react"

import "./header.scss"

interface Props {
  siteTitle: string
}

const Header: React.FC<Props> = ({ siteTitle }: Props) => (
  <div className="header">
    <div className="header__title">
      <h1 style={{ margin: 0 }}>
        <Link to="/" className="header__title-text">
          {siteTitle}
        </Link>
      </h1>
    </div>

    <nav className="header__bar">
      <a href="https://samshum90.github.io/" className="header__bar-link">
        Work
      </a>
    </nav>
  </div>
)

export default Header
