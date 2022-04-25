import React from "react";

class Btn extends React.Component {
  render({ value, handleData, className} = this.props) {
    return (
      <input
        className={className}
        value={value}
        type="submit"
        onClick={(e) => handleData(e.target.value.split("%")[0])}
      />
    );
  }
}

export default Btn;
