import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class Rolldice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);

    this.state = {
      die1: "one",
      die2: "two",
      rolling: false,
    };
    this.roll = this.roll.bind(this);
  }
  roll() {
    const { sides } = this.props;
    this.setState({ rolling: true });
    setTimeout(() => {
      this.setState({
        die1: sides[Math.floor(Math.random() * sides.length)],
        die2: sides[Math.floor(Math.random() * sides.length)],
        rolling: false,
      });
    }, 1000);
  }

  render() {
    const handlebtn = this.state.rolling ? "RollDice-rolling" : "";
    const { die1, die2, rolling } = this.state;
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die face={die1} rolling={rolling} />
          <Die face={die2} rolling={rolling} />
        </div>
        <button className={handlebtn} disabled={rolling} onClick={this.roll}>
          {rolling ? "Rolling..." : "Roll Dice!"}
        </button>
        <p className="RollDice-output"></p>
      </div>
    );
  }
}

export default Rolldice;
