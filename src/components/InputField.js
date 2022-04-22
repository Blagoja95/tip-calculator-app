import React from "react";

class InputField extends React.Component {
  render = ({ name, value } = this.props) => {
    return (
      <div className="input">
        <label htmlFor="bill">{name}</label>
        <input className="input__bar" placeholder={value} name={name} />
      </div>
    );
  };
}

export default InputField;
