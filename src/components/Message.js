import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
      toogle: true,
    };
  }

  changeMessage() {
    if (this.state.toogle) {
      this.setState({
        message: "Thank you for Subscribing",
        toogle: false,
      });
    } else {
      this.setState({
        message: "Welcome Visitor",
        toogle: true,
      });
    }
    console.log(this.state.toogle);
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
