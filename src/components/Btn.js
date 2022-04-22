import React from "react";

class Btn extends React.Component {
  render({ value } = this.props) {
    return <input className="tip btn btn--tip" value={value} type="button" />;
  }
}

export default Btn;
