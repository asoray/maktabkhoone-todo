import React, { Component } from "react";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";
import Filter from "./Filter";

@observer
class Footer extends Component {
  onClearAllCompleted = () => {
    todoStore.clearCompletedTodos();
  };

  render() {
    var itemOrItems = todoStore.activeTodos.length > 1 ? "items" : "item";

    var clearButton = null;
    if (todoStore.completedTodos.length > 0) {
      clearButton = (
        <button className="clear-completed" onClick={this.onClearAllCompleted}>
          Clear completed
        </button>
      );
    }

    if (todoStore.todos.length === 0) {
      todoStore.setShowingTodos("All");
      return null;
    }

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{todoStore.activeTodos.length}</strong> {itemOrItems} left
        </span>
        <Filter />
        {clearButton}
      </footer>
    );
  }
}

export default Footer;
