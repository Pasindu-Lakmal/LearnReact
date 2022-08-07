import React, { Component } from "react";
import ChildCompent from "./ChildCompent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };
  }

  greetaParent = (childName) => {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  };

  render() {
    return (
      <div>
        <ChildCompent greetHandler={this.greetaParent} />
      </div>
    );
  }
}

export default ParentComponent;
