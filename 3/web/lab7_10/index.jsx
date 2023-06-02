function App() {
  // Объявляем новую переменную состояния "count"
  const [count, setCount] = React.useState(0);

  const [age, setAge] = React.useState(42);
  const [fruit, setFruit] = React.useState('банан');
  const [todos, setTodos] = React.useState([{ text: 'Изучить хуки' }]);

  const handleAge = () => setAge(age + 1);
  const handleFruit = () => setFruit('яблоко');
  const handleTodos = () => setTodos([...todos, { text: 'Изучить React' }]);



  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
      <p>Возраст: {age}</p>
      <button onClick={handleAge}>Добавить год</button>

      <p>Выбранный фрукт: {fruit}</p>
      <button onClick={handleFruit}>Изменить фрукт</button>

      <p>Список дел:</p>
      <ul>
        {todos.map((todo, index) => <li key={index}>{todo.text}</li>)}
      </ul>
      <button onClick={handleTodos}>Добавить дело</button>

    </div>
  );
}

ReactDOM.render(
  <App></App>,
  document.getElementById("app")
)

