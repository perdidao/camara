import React from "react"

// Styles
import "./Footer.scss"

const Footer = (): JSX.Element => {
  const date = new Date()
  const year = date.getUTCFullYear()

  return (
    <footer className="footer">
      <p>Câmara dos deputados - {year}</p>
    </footer>
  )
}

export { Footer }
