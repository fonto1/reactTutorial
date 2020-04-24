import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // SHORT CIRCUIT OPERATOR, när du vill render something or nothing
    // om användaren är logged in render name
    // om amvändare inte är inloggad render inget, dvs standard

    return this.state.isLoggedIn && <div>Welcome Fon</div>; // kollar om första statement är true eller false

    // TERNARY CONDITIONAL OPERATOER, ANVÄNDS MEST!
    /*
    return this.state.isLoggedIn ? ( // kolla först om första statement är true eller false
      <div>Welcome Fon</div> // true returns
    ) : (
      <div>Welcome Guest</div> // false returns
    );

    */
    // ELEMENT VARIABLER RENDERING

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Fon</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;

    // IF ELSE CONDITIONAL RENDERING

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Fon</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
  }
}

export default UserGreeting;
