import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="App">
      <h1>TODO List</h1>
      <form className="App-form">
        <input type="text" />
        <button type="submit">+</button>
      </form>
      <div className="Todos">
        <TodoItem text="Watch TV" />
        <TodoItem text="Play the Piano" />
        <TodoItem text="Feed the cats" />
      </div>
    </div>
  );
}

export default App;
