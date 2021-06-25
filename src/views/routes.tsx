import React from "react"
import { Switch, Route } from "react-router-dom"

// Layout
import { DefaultLayout } from "views/layouts/Default"

// Pages
import { Home } from "views/pages/Home"
import { Deputados } from "views/pages/Deputados"

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/">
        <DefaultLayout childComponent={Home()} />
      </Route>
      <Route path="/deputados">
        <DefaultLayout childComponent={Deputados()} />
      </Route>
    </Switch>
  )
}

export { Routes }
