import React from "react";
import InputField from "./InputField";
import TipSelectBtn from "./Btn";
import CustomInput from "./CustomInput";

class TipForm extends React.Component {
  state = {
    bill: 0,
    people: 0,
    percentage: 0,
  };

  // callbacks
  handlePeople = (data) => this.setState({ people: data });
  handleBill = (data) => this.setState({ bill: data });
  handlePercentage = (data) => this.setState({ percentage: data / 100 });

  formSubmit = (e) => {
    e.preventDefault();

    const result = this.calculateTip(this.state);
    this.props.getData(result);
  };

  calculateTip(data) {
    const { bill, people, percentage } = data;
    const preTip = bill / people;
    const result = {
      tip: +(preTip * percentage).toFixed(2),
      tot: +(preTip * percentage + preTip).toFixed(2),
    };
    return result;
  }

  render = ({ reset } = this.props) => {
    return (
      <div className="tip-block">
        <form className="form-tip" onSubmit={this.formSubmit}>
          <InputField name={"Bill"} getData={this.handleBill} />
          <div className="tip-select">
            <h2 className="title">Select Tip %</h2>
            <div className="tips">
              <TipSelectBtn
                value="5%"
                className={"tip btn btn--tip"}
                getData={this.handlePercentage}
                reset={reset}
              />
              <TipSelectBtn
                value="10%"
                className={"tip btn btn--tip"}
                getData={this.handlePercentage}
                reset={reset}
              />
              <TipSelectBtn
                value="15%"
                className={"tip btn btn--tip"}
                getData={this.handlePercentage}
                reset={reset}
              />
              <TipSelectBtn
                value="25%"
                className={"tip btn btn--tip"}
                getData={this.handlePercentage}
                reset={reset}
              />
              <TipSelectBtn
                value="50%"
                className={"tip btn btn--tip"}
                getData={this.handlePercentage}
                reset={reset}
              />
              <CustomInput name="custom" handleData={this.handlePercentage} />
            </div>
          </div>
          <InputField name={"Number of people"} getData={this.handlePeople} />
        </form>
      </div>
    );
  };
}

export default TipForm;
