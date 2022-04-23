import React from "react";

class Btn extends React.Component {
  render({ value, handleData } = this.props) {
    return (
      <input
        className="tip btn btn--tip"
        value={value}
        type="submit"
        onClick={(e) => handleData(e.target.value.split("%")[0])}
      />
    );
  }
}

export default Btn;
