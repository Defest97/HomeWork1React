import React from "react";
import "./styles.css";
import Task1 from "../src/Task1/Task1";
import Task2 from "../src/Task2/Task2";

export default class App extends React.Component {
  render() {
    return (
      <>
        <h1>Task1</h1>
        <Task1 />
        <h1>Task2</h1>
        <Task2 />
      </>
    );
  }
}
