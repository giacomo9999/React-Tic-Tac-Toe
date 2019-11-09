import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container-outer">
        <h1>Tic Tac Toe</h1>
        <Board />
      </div>
    );
  }
}

class Board extends Component {
  constructor() {
    super();
    this.state = { boxMarks: [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]]};
    this.switchMark = this.switchMark.bind(this);
  }

  switchMark(row, box) {
    const tempArr = this.state.boxMarks;
    console.log("Switching...", this.state.boxMarks);

    if (this.state.boxMarks[row][box] === "-") {
      tempArr[row][box] = "X";
      console.log(tempArr);
      this.setState({ boxMarks: tempArr });
      return;
    }
    
    if (this.state.boxMarks[row][box] === "X") {
      tempArr[row][box] = "O";
      console.log(this.state.boxMarks);
      this.setState({ boxMarks: tempArr });
      return;
    }

    if (this.state.boxMarks[row][box] === "O") {
      tempArr[row][box] = "X";
      console.log(this.state.boxMarks);
      this.setState({ boxMarks: tempArr });
      return;
    }
  }
  
  render() {
    const rowsForBoard = [];
    for (let i = 0; i < 3; i++) {
      rowsForBoard.push(
        <Row
          key={"row_" + i}
          rowId={i}
          rowMarks={this.state.boxMarks[i]}
          switchMark={this.switchMark}
        />
      );
    }
    return <div className="rowsForBoard">{rowsForBoard}</div>;
  }
}



class Row extends Component {
  // constructor() {
  //   super();
  //   this.state = { boxMarks: ["-", "-", "-"] };
  //   this.switchMark = this.switchMark.bind(this);
  // }


  render() {
    console.log("Row Of Boxes here...");
    const rowOfBoxes = [];
    for (let i = 0; i < 3; i++) {
      rowOfBoxes.push(
        <Box
          key={"box_" + i}
          boxId={i}
          rowId={this.props.rowId}
          mark={this.props.rowMarks[i]}
          switchMark={this.props.switchMark}
        />
      );
    }
    return <div className="rowOfBoxes">{rowOfBoxes}</div>;
  }
}

class Box extends Component {
  // componentDidMount() {
  //   this.changeState = setInterval(this.switchMark, 300);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.changeState);
  // }
 
  
  switchMarkHandle(e) {
    e.preventDefault();
    this.props.switchMark(this.props.rowId, this.props.boxId);
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
