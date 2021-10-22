import React, { Component } from "react";
import TodoList from "./components/TodoList";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: "",
      todoItems: [
        { title: "Learn react", isComplete: false },
        { title: "Learn English", isComplete: false },
      ],
    };

    this.inputElement = React.createRef();
    this.btnAdd = React.createRef();

    this.onInputChange = this.onInputChange.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
    this.onDelClick = this.onDelClick.bind(this);
    this.onCheckClick = this.onCheckClick.bind(this);
  }

  componentDidMount() {
    let local = localStorage.getItem("item");
    console.log(JSON.parse(local));
    if (local) {
      this.setState({
        todoItems: JSON.parse(local),
      });
    }
  }

  componentDidUpdate() {
    const { todoItems } = this.state;
    localStorage.setItem("item", JSON.stringify(todoItems));
  }

  onInputChange(e) {
    this.setState({
      newTodo: e.target.value,
    });
  }

  onAddClick(e) {
    const { todoItems, newTodo } = this.state;
    this.setState({
      newTodo: "",
      todoItems: [{ title: newTodo, isComplete: false }, ...todoItems],
    });
  }

  onDelClick(index) {
    return (e) => {
      const { todoItems } = this.state;
      if (index >= 0) {
        todoItems.splice(index, 1);
        this.setState({
          todoItems: [...todoItems],
        });
      }
    };
  }

  onCheckClick(index, todo) {
    return (e) => {
      console.log(index);
      const isComplete = todo.isComplete;
      const { todoItems } = this.state;
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          { ...todo, isComplete: !isComplete },
          ...todoItems.slice(index + 1),
        ],
      });
      console.log(todoItems);
    };
  }

  render() {
    const { newTodo, todoItems } = this.state;
    return (
      <div>
        <div className="container">
          <h3 className="heading">Danh sách việc cần làm</h3>
          <div className="box__input">
            <input
              type="text"
              className="input-txt"
              placeholder="Thêm việc cần làm"
              value={newTodo}
              onChange={this.onInputChange}
              ref={this.inputElement}
            />
            <input
              type="button"
              value="Thêm"
              className="input-btn btn-add"
              disabled={!newTodo}
              onClick={this.onAddClick}
              ref={this.btnAdd}
            />
          </div>
          <TodoList
            todoItems={todoItems}
            onDelClick={this.onDelClick}
            onCheckClick={this.onCheckClick}
          />
        </div>
      </div>
    );
  }
}
