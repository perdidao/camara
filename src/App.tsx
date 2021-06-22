import React, { PureComponent } from "react"
import { BrowserRouter as Router } from "react-router-dom"

// Global styles
import "assets/styles/global.scss"

// Components
import { Footer, Header } from "views/components/shared"

// Default Components
import { Routes } from "views/routes"

class App extends PureComponent {
  public render(): JSX.Element {
    return (
      <Router>
        <Header title="Câmara dos deputados" />
        <Routes />
        <Footer />
      </Router>
    )
  }
}

export default App
