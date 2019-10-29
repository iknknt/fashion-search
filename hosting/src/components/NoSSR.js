import React from "react";

export default class NoSSR extends React.Component {

  state = { canRender: false }

  componentDidMount() {
    this.setState({ canRender: true });
  }

  render() {
    const { children, onSSR = <React.Fragment /> } = this.props;
    return this.state.canRender ? children : onSSR;
  }
}
