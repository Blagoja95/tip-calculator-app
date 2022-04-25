import React from "react";

class InputField extends React.Component {
  error = (e) => {
    e.target.value = "Can't be zero";
    e.target.style.color = "red";
    e.target.style.border = "3px solid red";
    e.target.style.fontSize = "16px";
  };

  render = ({ name, handleData } = this.props) => {
    return (
      <div className="input">
        <label htmlFor="bill">{name}</label>
        <input
          className="input__bar"
          placeholder={0}
          name={name}
          onChange={(e) => {
            if (+e.target.value !== 0) handleData(e.target.value);
            else this.error(e);
          }}
        />
      </div>
    );
  };
}

export default InputField;
