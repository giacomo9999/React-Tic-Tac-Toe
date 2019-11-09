import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container-outer">
        <h1>Tic Tac Toe</h1>
        <Row />
      </div>
    );
  }
}

class Row extends Component {
  constructor() {
    super();
    this.state = { boxMarks: ["-", "-", "-"] };
    this.switchMark = this.switchMark.bind(this);
  }

  switchMark(id) {
    const tempArr = this.state.boxMarks;
    console.log("Switching...", this.state.boxMarks);

    if (this.state.boxMarks[id] === "-") {
      tempArr[id] = "X";
      console.log(tempArr);
      this.setState({ boxMarks: tempArr });
    }
    // } else if (this.state.boxMarks[id] === "X") {
    //   tempArr[id] = "O";
    //   this.setState({ boxMarks: tempArr });
    // } else if (this.state.boxMarks[id] === "O") {
    //   tempArr[id] = "X";
    //   this.setState({ boxMarks: tempArr });
    // }
  }

  //   this.state.boxMarks[id] === "X"
  //     ? this.setState({ mark: "O" })
  //     : this.setState({ mark: "X" });

  render() {
    console.log("Row Of Boxes here...");
    const rowOfBoxes = [];
    for (let i = 0; i < 3; i++) {
      rowOfBoxes.push(
        <Box
          key={"box_" + i}
          boxId={i}
          mark={this.state.boxMarks[i]}
          switchMark={this.switchMark}
        />
      );
    }
    return <div className="rowOfBoxes">{rowOfBoxes}</div>;
  }
}

class Box extends Component {
  // constructor() {
  //   super();
  // }

  // componentDidMount() {
  //   this.changeState = setInterval(this.switchMark, 300);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.changeState);
  // }

  switchMarkHandle(e) {
    e.preventDefault();
    this.props.switchMark(this.props.boxId);
  }

  render() {
    console.log("Box here....", this.props);
    return (
      <div>
        <button className="box" onClick={this.switchMarkHandle.bind(this)}>
          <h1>{this.props.mark}</h1>
        </button>
      </div>
    );
  }
}

export default App;
