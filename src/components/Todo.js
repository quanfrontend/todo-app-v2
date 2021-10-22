import React, { Component } from "react";
import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default class Todo extends Component {
  render() {
    const { todo, onDelClick, onCheckClick } = this.props;
    let className = "item-content";
    if (todo.isComplete) {
      className += " item-content-complete";
    }
    return (
      <div>
        <div className="todo__item">
          <h3 className={className}>{todo.title}</h3>
          <div className="actions">
            <button className="icon" onClick={onCheckClick}>
              <FaCheck />
            </button>
            <button className="icon" onClick={onDelClick}>
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
