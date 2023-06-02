import React, { useState } from "react";

import "./styles.css"; // Импортируем CSS файл

const categories = [
  { id: 1, name: "Личные", icon: "👨" },
  { id: 2, name: "Работа", icon: "⚒" },
  { id: 3, name: "Учеба", icon: "📖" },
  { id: 4, name: "Отдых", icon: "🌴" }
];

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id}>
            {item.text}
            <a
              class="delete-button"
              onClick={() => this.props.onDelete(item.id)}
            >
              ✖
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: "",
      selectedCategory: 0
    };
  }

  selectTasksForCategory = (category_id) => {
    const selectedCategory = categories.find(
      (category) => category.id === category_id
    );
    const tasksForSelectedCategory = this.state.items.filter(
      (item) => item.categoryId === category_id
    );
    return tasksForSelectedCategory;
  };

  setSelectedCategoryId = (category_id) => {
    this.setState((state) => ({
      items: state.items,
      categoryId: category_id
    }));
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      categoryId: parseInt(document.getElementById("new-todo-category").value)
    };
    console.log(newItem);
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: ""
    }));
  };

  deleteTask = (id) => {
    const newItems = this.state.items.filter((item) => item.id !== id);
    this.setState((state) => ({
      items: newItems,
      text: ""
    }));
  };

  render() {
    if (this.state.categoryId > 0) {
      var todo_items = this.selectTasksForCategory(this.state.categoryId);
    } else {
      var todo_items = this.state.items;
    }
    return (
      <div>
        <h3>Список дел</h3>

        <div class="categories">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => this.setSelectedCategoryId(category.id)}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        <TodoList items={todo_items} onDelete={this.deleteTask} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">Что нужно сделать?</label>
          <input
            type="text"
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <select id="new-todo-category">
            {categories.map((category) => (
              <option value={category.id}>{category.name}</option>
            ))}
          </select>
          <button>Добавить #{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }
}

export default TodoApp;
