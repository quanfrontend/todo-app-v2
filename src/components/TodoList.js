import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  render() {
    const { todoItems, onDelClick, onCheckClick } = this.props;
    return (
      <div>
        {todoItems.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            onDelClick={onDelClick(index)}
            onCheckClick={onCheckClick(index, todo)}
          />
        ))}
      </div>
    );
  }
}
