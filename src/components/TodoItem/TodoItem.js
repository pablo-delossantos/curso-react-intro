import "./TodoItem.css"

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span className="Icon Icon-check Icon-check--active"><i class="fa-solid fa-check"></i></span>
      <p className="TodoItem-p TodoItem-p--complete">{props.text}</p>
      <span className="Icon Icon-delete"><i class="fa-solid fa-circle-xmark"></i></span>
    </li>
  );
}

export { TodoItem };
