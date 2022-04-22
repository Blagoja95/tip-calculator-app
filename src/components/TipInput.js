import React from "react";
import InputField from "./InputField";
import TipSelectBtn from "./Btn";

class TipForm extends React.Component {
  render() {
    return (
      <div className="tip-block">
        <form className="">
          <InputField name={"Bill"} value={0.0} />
          <div className="tip-select">
            <h2>Select Tip %</h2>
            <div className="tips">
              <TipSelectBtn value="5%" />
              <TipSelectBtn value="10%" />
              <TipSelectBtn value="15%" />
              <TipSelectBtn value="25%" />
              <TipSelectBtn value="50%" />
              <TipSelectBtn value="Custom" />
            </div>
          </div>
          <InputField name={"People"} value={1} />
        </form>
      </div>
    );
  }
}

export default TipForm;
