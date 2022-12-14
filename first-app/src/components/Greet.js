import React from "react";

// function Greet() {
//   return <h1>Hello Pasindu</h1>;
// }

// use arrow function for same thing

// const Greet = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>
//         Hello {props.name} a.k.a {props.heroName}
//       </h1>
//       {props.children}
//     </div>
//   );
// };

//destructure props

const Greet = ({ name, heroName, children }) => {
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
      {children}
    </div>
  );
};

export default Greet;
