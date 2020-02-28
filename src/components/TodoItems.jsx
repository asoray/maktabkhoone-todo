import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";

@observer
class TodoItems extends Component {
  
  showingList = showingTodos => {
    switch (showingTodos) {
      case "Active":
        return todoStore.activeTodos;
      case "Completed":
        return todoStore.completedTodos;
      default:
        return todoStore.todos;
    }
  };

  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.showingList(todoStore.showingTodos).map(todo => {
            return <TodoItem key={todo.id.toString()} todo={todo} />;
          })}
        </ul>
      </section>
    );
  }
}

export default TodoItems;
