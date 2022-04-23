import React from "react";

class InputField extends React.Component {
  render = ({ name, handleData } = this.props) => {
    return (
      <div className="input">
        <label htmlFor="bill">{name}</label>
        <input
          className="input__bar"
          placeholder={0}
          name={name}
          onChange={(e) => handleData(e.target.value)}
        />
      </div>
    );
  };
}

export default InputField;
