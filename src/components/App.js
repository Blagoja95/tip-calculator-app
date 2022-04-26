import React from "react";
import TipInput from "./TipInput";
import TipResult from "./TipResult";
import "../sass/main.scss";

class App extends React.Component {
  state = { tip: 0, tot: 0 };

  getData = (data) => {
    this.setState({ tip: data.tip, tot: data.tot });
  };

  reset = () => {
    this.setState({ tip: 0, tot: 0 });
    console.log("reset");
  };

  render() {
    return (
      <main>
        <h1 className="title title--main">
          SPLI<span className="title--new-line">TTER</span>
        </h1>
        <div className="calculator">
          <TipInput getData={this.getData} />
          <TipResult data={this.state} reset={this.reset} />
        </div>
      </main>
    );
  }
}

export default App;
