class TodoList extends React.Component {
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.text}<a class="delete-button" onClick={() => this.props.onDelete(item.id)}>✖</a></li>            
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
      text: ''
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }

  deleteTask = (id) => {
    const newItems = this.state.items.filter(item => item.id !== id);
    // this.setState({ items: newItems });
    this.setState(state => ({
        items: newItems,
        text: ''
      }));
  }

  render() {
    return (
      <div>
        <h3>Список дел</h3>
        <TodoList items={this.state.items} onDelete={this.deleteTask} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            Что нужно сделать?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Добавить #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }
}



ReactDOM.render(
    <TodoApp></TodoApp>,
    document.getElementById("app")
)


// export default TodoApp;


// class Hello extends React.Component {
//     render() {
//         return <h1>Hello, React</h1>;
//     }
// }
// ReactDOM.render(
//     <Hello></Hello>,
//     document.getElementById("app")
// )
