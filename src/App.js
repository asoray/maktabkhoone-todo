import React, { Component } from "react";
import TodoEntry from "./components/TodoEntry";
import TodoItems from "./components/TodoItems";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div id="todoapp" className="todoapp">
        <TodoEntry />
        <TodoItems />
        <Footer />
      </div>
    );
  }
}

export default App;
