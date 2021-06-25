import React from "react"

// Types
import { LayoutProps as Props } from "./types"

class FluidLayout extends React.Component<Props> {
  public render(): JSX.Element {
    const { childComponent } = this.props

    return <>{childComponent}</>
  }
}

export { FluidLayout }
