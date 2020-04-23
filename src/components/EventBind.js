import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // this.clickHandler = this.clickHandler.bind(this);
  }

  //   clickHandler() {
  //     this.setState({
  //       message: "GoodBye!",
  //     });
  //     console.log(this);
  //   }

  clickHandler = () => {
    this.setState({ message: "GoodBye2" });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onclick={this.clickHandler.bind(this)}>Click</button>
        <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

/* 4-Binds
1 onclick={this.clickHandler.bind(this)} binding in render - använd inte pga performance
2 onClick={() => this.clickHandler() arrow function in render - lättaste att skicka parametrar, funkar ok om koden inte rerender för mkt
3 onClick={this.clickHandler} + binding i Class-constructor - bra, bäst just nu
4 onClick={this.clickHandler} Classproperty som arrowfunction - bra, expermiental
*/

export default EventBind;
