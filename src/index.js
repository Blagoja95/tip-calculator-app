import React from "react";
import ReactDOM from "react-dom";
import TipInput from "./components/TipInput";
import TipResult from "./components/TipResult";
import "./sass/main.scss";
class App extends React.Component {
  state = { tip: 0, tot: 0 };

  getData = (data) => {
    this.setState({ tip: data.tip, tot: data.tot });
  };
  render() {
    return (
      <main>
        <h1 className="title title--main">
          SPLI<span className="title--new-line">TTER</span>
        </h1>
        <div className="calculator">
          <TipInput getData={this.getData} />
          <TipResult data={this.state} />
        </div>
      </main>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
