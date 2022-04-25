import React from "react";
import InputField from "./InputField";
import Btn from "./Btn";
import Result from "./Result";
class TipResult extends React.Component {
  render({ tip, tot } = this.props.data) {
    return (
      <div className="result-block">
        <Result name={"Tip Amount"} value={tip} />
        <Result name={"Total"} value={tot} />
        <Btn value={"RESET"} className={"tip btn btn--tip btn--reset"}></Btn>
      </div>
    );
  }
}

export default TipResult;
