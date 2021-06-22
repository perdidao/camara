import React from "react"
import { Switch, Route } from "react-router-dom"
import { Deputados } from "./pages/Deputados"
import { Home } from "./pages/Home"

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/deputados">
        <Deputados />
      </Route>
    </Switch>
  )
}

export { Routes }
