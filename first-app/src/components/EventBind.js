import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello",
    };
    // this.clickHandler = this.clickHandler.bind(this);
  }
  // 1 can use with below one (line 33 without line 10 assining )
  clickHandler = () => {
    this.setState({
      message: "GoodBye",
    });
  };

  //thsi can use beacause of above this.clickHandler assining in line 10 and both other line button
  //   clickHandler = () => {
  //     this.setState({
  //       message: "GoodBye",
  //     });
  //   };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
        {/* <button onClick={()=>this.clickHandler()}>click</button> */}
        {/* 1 */}
        <button onClick={this.clickHandler}>click</button>
      </div>
    );
  }
}

export default EventBind;
