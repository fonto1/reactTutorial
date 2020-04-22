import React, { Component } from "react";

class Welcome extends Component {
  // DETTA ÄR EN CLASSCOMPONENT, props är reserverad att använda tillsammans med "this"
  render() {
    const { name, heroName } = this.props;

    return (
      <h1>
        Welcome {this.props.name} a.k.a {this.props.heroName}
      </h1>
    );
  }
}

export default Welcome;
