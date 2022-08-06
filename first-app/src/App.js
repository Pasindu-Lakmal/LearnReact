import logo from "./logo.svg";
import "./App.css";
import Greet from "./componrnts/Greet";
import Welcome from "./componrnts/Welcome";
import Hello from "./componrnts/Hello";
import Message from "./componrnts/Message";

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Batgirl">
        <button>Action</button>
      </Greet>

      <Greet name="Diana" heroName="SuperMan" />

      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Cark" heroName="Batgirl" />
      <Welcome name="Diana" heroName="SuperMan" />

      <Message />
      {/* <Hello /> */}
    </div>
  );
}

export default App;
