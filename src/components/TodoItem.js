import "./TodoItem.css";

const TodoItem = (props) => {
  return (
    <div className="todo">
      <input type="checkbox"></input>
      <label>{props.text}</label>
    </div>
  );
};

export default TodoItem;
