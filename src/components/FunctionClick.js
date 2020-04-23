import React from "react";

export function FunctionClick() {
  function clickHandler() {
    console.log("you clicked an function button");
  }

  return (
    <div>
      <button onClick={clickHandler}>Click Function!</button>
    </div>
  );
}
