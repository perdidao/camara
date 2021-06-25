import React from "react"
import { Link } from "react-router-dom"

// Styles
import "./Header.scss"

// Types
import { HeaderProps } from "./types"

// Routes
import { routes } from "config/routes"

const Header = (Props: HeaderProps): JSX.Element => {
  const { title } = Props

  return (
    <header className="header">
      <div className="container header__container">
        <p className="header__logo">{title}</p>

        <nav className="header__nav">
          {routes.map((route) => {
            return (
              <Link to={route.url} className="header__link" key={route.key}>
                {route.title}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export { Header }
