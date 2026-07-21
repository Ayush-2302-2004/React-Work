import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Die.css";

class Die extends Component {
  render() {
    const { face, rolling } = this.props;

    return (
      <div>
        <FontAwesomeIcon
          icon={["fas", `dice-${face}`]}
          className={`Die 
                    ${rolling && "Die-shaking"}`}
        />
      </div>
    );
  }
}
export default Die;
