import React from "react";
import InputField from "./InputField";
import Btn from "./Btn";
import Result from "./Result";

class TipResult extends React.Component {
  render() {
    return (
      <div className="result-block">
        <Result name={"Tip Amount"} value={4.25} />
        <Result name={"Total"} value={32.25} />

        <Btn value={"RESET"}></Btn>
      </div>
    );
  }
}

export default TipResult;
