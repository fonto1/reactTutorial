import React from "react";

export function ChildComponent(props) {
  return (
    <div>
      {/* <button onClick={props.greetHandler}>Greet Parent</button>*/}
      {/* Använder ParentComponent som props   */}

      <button onClick={() => props.greetHandler("child")}>Greet Parent</button>
    </div>
  );
}
