import React from "react";

class InputField extends React.Component {
  error = (e) => {
    e.target.value = "Can't be empty";
    e.target.classList.add("error-msg");

    setTimeout(() => {
      e.target.value = 0;
      e.target.classList.remove("error-msg");
    }, 2000);
  };

  handleData = (e) => {
    const userInput = +e.target.value;
    if (userInput !== 0) {
      this.props.getData(userInput);
    } else this.error(e);
  };

  render = ({ name } = this.props) => {
    return (
      <div className="input">
        <label htmlFor={name}>{name}</label>
        <input
          className="input__bar"
          placeholder="0"
          name={name}
          onChange={this.handleData}
        />
      </div>
    );
  };
}

export default InputField;
