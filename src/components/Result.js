import React from "react";

class Result extends React.Component {
  render = ({ name, value } = this.props) => {
    return (
      <div className="tip-amount">
        <h2 className="tip-amount-title">{name}</h2>
        <p className="tip-amount-person">/ person</p>
        <p className="tip-result">${value}</p>
      </div>
    );
  };
}

export default Result;
