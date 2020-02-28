import React, { Component } from "react";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";

@observer
class Filter extends Component {
  onSelectList = (list, e) => {
    e.preventDefault();
    todoStore.setShowingTodos(list);
  };
  render() {
    var selectedList = todoStore.showingTodos;
    return (
      <ul className="filters">
        <li>
          <a
            className={selectedList === "All" ? "selected" : ""}
            onClick={e => this.onSelectList("All", e)}
            href="#/"
          >
            All
          </a>
        </li>{" "}
        <li>
          <a
            className={selectedList === "Active" ? "selected" : ""}
            onClick={e => this.onSelectList("Active", e)}
            href="#/active"
          >
            Active
          </a>
        </li>{" "}
        <li>
          <a
            className={selectedList === "Completed" ? "selected" : ""}
            onClick={e => this.onSelectList("Completed", e)}
            href="#/completed"
          >
            Completed
          </a>
        </li>
      </ul>
    );
  }
}

export default Filter;
