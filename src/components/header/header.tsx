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
      <Link to="" className="header__bar-link">
        Work
      </Link>
    </nav>
  </div>
)

export default Header
