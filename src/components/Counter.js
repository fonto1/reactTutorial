import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      sapsap: "jiejda",
    };
  }

  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("callback value " + this.state.count);
    //   }
    // );

    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      console.log(this.state.count)
    );
  }

  // när man uppdate previoustate, skicka alltid en funktion
  //istället för att uppdatera nuvarande state

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  //console.log happens after statechange, to consoleLog efter
  //statechane must call callback efter

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Click Me!</button>
      </div>
    );
  }
}

export default Counter;
