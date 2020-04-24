import React from "react";

export default function Person(props) {
  return (
    <div>
      <h2>
        I am {props.person.name}, {props.person.age} and good at{" "}
        {props.person.skill}
      </h2>
    </div>
  );
}
