import React, { Component } from "react";

export class ClassClicks extends Component {
  clickHandler() {
    console.log("you clicked an class button!");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click CLass!</button>
      </div>
    );
  }
}
