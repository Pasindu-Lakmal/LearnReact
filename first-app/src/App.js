import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Bruce" heroName="Batman">
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
      <Hello /> */}
      <Counter />
    </div>
  );
}

export default App;
