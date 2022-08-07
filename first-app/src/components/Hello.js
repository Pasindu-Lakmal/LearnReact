import React from "react";

const Hello = () => {
  //JSX pattern
  //   return (
  //     <div className = 'dumyClass'>
  //       <h1>hello pasindu</h1>
  //     </div>
  //   );
  //Without JSX
  return React.createElement(
    "div",
    { id: "hello", className: "dumyClass" },
    React.createElement("h1", null, "Hello Pasindu")
  );
};

export default Hello;
