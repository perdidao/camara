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
    <header className="Header">
      <p>{title}</p>

      <nav className="Header__nav">
        {routes.map((route) => {
          return (
            <Link to={route.url} className="Header__link" key={route.key}>
              {route.title}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}

export { Header }
