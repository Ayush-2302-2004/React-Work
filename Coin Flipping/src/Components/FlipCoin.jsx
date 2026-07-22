import React, { Component } from "react";
import Coin from "./Coin";
import "./Coin.css";

class FlipCoin extends Component {
  static defaultProps = {
    coins: [
      {
        side: "head",
        imgSrc:
          "https://th.bing.com/th/id/OIG3.4jWwDPRjv4nLWRTOhxHe?w=1248&h=832&qlt=70&p=0&r=0&o=4&pid=ImgGn",
      },
      {
        side: "tail",
        imgSrc:
          "https://th.bing.com/th/id/OIG2.1p8cwIDiflA7Rxepr25.?w=1536&h=1024&qlt=30&p=0&r=0&o=4&pid=ImgGn",
      },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      currFace: null,
      totalflips: 0,
      heads: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  choice(arr) {
    const randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
  }

  flipCoin() {
    const newFace = this.choice(this.props.coins);
    this.setState((curState) => {
      const heads = curState.heads + (newFace.side === "head" ? 1 : 0);
      return {
        currFace: newFace,
        totalflips: curState.totalflips + 1,
        heads: heads,
      };
    });
  }

  handleClick() {
    this.flipCoin();
  }

  render() {
    const { currFace, totalflips, heads } = this.state;
    return (
      <div>
        <h1 style={{ font: "-moz-initial", color: "white" }}>
          Lets Flip the coin
        </h1>
        {currFace && <Coin info={currFace} />}

        <button onClick={this.handleClick} style={{}} className="btn">
          Flip Me!
        </button>
        <p>
          Out of {totalflips} flips, there have been {heads} heads and{" "}
          {totalflips - heads} tails
        </p>
      </div>
    );
  }
}

export default FlipCoin;
