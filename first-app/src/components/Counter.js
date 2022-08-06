import React, { Component } from "react";

class Counter extends Component {
  //counstructor
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  // increment  method
  increment() {
    // when we use current  state and increment it  give some incorrect value for ui there for we have to use prevState
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("Call Back value", this.state.count);
    //   }
    // );
    // console.log("Value before call back", this.state.count);

    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log("Call Back value", this.state.count);
      }
    );
    console.log("Value before call back", this.state.count);
  }

  //increment  5 method
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>increment</button>
      </div>
    );
  }
}

export default Counter;
