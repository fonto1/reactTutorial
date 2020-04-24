import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./components/Greet.js";
import Welcome from "./components/Welcome.js";
import Hello from "./components/Hello.js";
import Message from "./components/Message.js";
import Counter from "./components/Counter.js";
import { FunctionClick } from "./components/FunctionClick.js";
import { ClassClicks } from "./components/ClassClicks.js";
import EventBind from "./components/EventBind.js";
import ParentComponent from "./components/ParentComponent.js";
import UserGreeting from "./components/UserGreeting.js";
import NameList from "./components/NameList.js";

function App() {
  return (
    <div className="App">
      {/*<EventBind />
      <FunctionClick />
      <ClassClicks />
      <Greet name="Fon" heroName="superman">
        <p>this is children props</p>
      </Greet>
      <Greet name="Eriks" heroName="batman">
        <button>hehe</button>
      </Greet>
 
      <Welcome name="Eriks" heroName="batman" />
      <Welcome name="Test" heroName="wonderman" />
      <Message />
      <Hello /> 
      <Counter />

      <Greet name="Test" heroName="wonderman" />
      <Welcome name="Fon" heroName="superman" />*/}
      <ParentComponent />
      <UserGreeting />
      <NameList />
    </div>
  );
}

export default App;
