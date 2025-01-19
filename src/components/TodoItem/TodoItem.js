import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${
          props.completed && "Icon-check--active"
        } `}
      >
        <i className="fa-solid fa-check" />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">
        <i className="fa-solid fa-circle-xmark" />
      </span>
    </li>
  );
}

export { TodoItem };
