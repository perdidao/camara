import React from "react"

// Types
import { LayoutProps as Props } from "./types"

class DefaultLayout extends React.Component<Props> {
  public render(): JSX.Element {
    const { childComponent } = this.props

    return (
      <>
        <div className="container">{childComponent}</div>
      </>
    )
  }
}

export { DefaultLayout }
