import React from "react";
import Person from "./Person";

export default function NameList() {
  const names = ["Bruce", "Clark", "Diana"];
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue",
    },
  ];
  const nameList = names.map((name) => <h2 key={name}>{name}</h2>);
  const personList = persons.map((person) => (
    <h2 key={person.name}>
      I am {person.name}, {person.age} and good at {person.skill}
    </h2>
  ));

  const personList2 = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));

  //   return <div>{personList}</div>;

  return <div>{personList2}</div>;
}
