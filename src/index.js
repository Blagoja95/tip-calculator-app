import React from "react";
import ReactDOM from "react-dom";
import TipInput from "./components/TipInput";
import TipResult from "./components/TipResult";
class App extends React.Component {
  render() {
    return (
      <main>
        <h1>
          SPLI<span>TTER</span>
        </h1>
        <div className="calculator">
          <TipInput />
          <TipResult />
        </div>
      </main>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
