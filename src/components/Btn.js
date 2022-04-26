import React from "react";

class Btn extends React.Component {
  handleData = (e) => {
    const result = e.target.value.split("%")[0];
    this.props.getData(+result);
  };

  render({ value, className } = this.props) {
    return (
      <input
        className={className}
        value={value}
        type="submit"
        onClick={
          value.toLowerCase() === "reset" ? this.props.reset : this.handleData
        }
      />
    );
  }
}

export default Btn;
