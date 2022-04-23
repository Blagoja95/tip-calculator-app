import React from "react";
import InputField from "./InputField";
import TipSelectBtn from "./Btn";

class TipForm extends React.Component {
  state = {
    bill: 0,
    people: 0,
    percentage: 0,
  };

  // callbacks
  handlePeople = (data) => this.setState({ people: +data });
  handleBill = (data) => this.setState({ bill: +data });
  handlePercentage = (data) => this.setState({ percentage: +data / 100 });

  calculateTip(data) {
    const { bill, people, percentage } = data;
    const preTip = bill / people;
    const result = {
      tip: +(preTip * percentage).toFixed(2),
      tot: +(preTip * percentage + preTip).toFixed(2),
    };
    return result;
  }

  render = ({ getData } = this.props) => {
    return (
      <div className="tip-block">
        <form
          className="form-tip"
          onSubmit={(e) => {
            e.preventDefault();
            getData(this.calculateTip(this.state));
          }}
        >
          <InputField name={"Bill"} handleData={this.handleBill} />
          <div className="tip-select">
            <h2>Select Tip %</h2>
            <div className="tips">
              <TipSelectBtn value="5%" handleData={this.handlePercentage} />
              <TipSelectBtn value="10%" handleData={this.handlePercentage} />
              <TipSelectBtn value="15%" handleData={this.handlePercentage} />
              <TipSelectBtn value="25%" handleData={this.handlePercentage} />
              <TipSelectBtn value="50%" handleData={this.handlePercentage} />
              <TipSelectBtn value="Custom" handleData={this.handlePercentage} />
            </div>
          </div>
          <InputField
            name={"Number of people"}
            handleData={this.handlePeople}
          />
        </form>
      </div>
    );
  };
}

export default TipForm;
