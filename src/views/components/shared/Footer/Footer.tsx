import React from "react"

const Footer = (): JSX.Element => {
  const date = new Date()
  const year = date.getUTCFullYear()

  return (
    <footer className="Footer">
      <p>Câmara dos deputados - {year}</p>
    </footer>
  )
}

export { Footer }
