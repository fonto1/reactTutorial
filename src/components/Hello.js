import React from "react";

const Hello = () => {
  // return (
  //     <div className="skolaClasloh" id="heheID">
  //         <h1>Hello sappio sap</h1>
  //     </div>
  // )

  return React.createElement(
    "div",
    { id: "heheID", className: "skolaCLassloh" },
    React.createElement("h1", null, "hellLoComponent")
  );
  // tre inparametrar 1  element, 2 object av keyvaluepairs som appliceras på elementen dvs attribut, 3 värde
};
export default Hello;
