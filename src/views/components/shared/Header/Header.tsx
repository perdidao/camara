import React from "react"
import { Link } from "react-router-dom"

// Styles
import "./Header.scss"

// Types
import { HeaderProps } from "./types"

const Header = (Props: HeaderProps): JSX.Element => {
  const { title } = Props

  return (
    <header className="Header">
      <p>{title}</p>

      <nav className="Header__nav">
        <Link to="/" className="Header__link">
          Home
        </Link>
        <Link to="/deputados" className="Header__link">
          Deputados
        </Link>
      </nav>
    </header>
  )
}

export { Header }
