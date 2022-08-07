import React from "react";

function ChildCompent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler("Child")}>Greet Parent</button>
    </div>
  );
}

export default ChildCompent;
