import React from "react";
import Button from '@material-ui/core/Button';


export default class HelloState extends React.Component {
  render() {
    const { state, props } = this;

    return (
      <div>
        <h2>{props.title}</h2>
        <p>{state.count}</p>
        <Button variant='contained' onClick={this.countUp}>Count up</Button>
      </div>
    );
  }

  state = {
    count: 0,
  }

  countUp = () => {
    const { state } = this;
    console.log(state.count++);
    this.setState({ count: state.count++ });
  }
}
