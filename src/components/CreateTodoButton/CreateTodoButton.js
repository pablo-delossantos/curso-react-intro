import "./CreateTodoButton.css";

function CreateTodoButton() {
  return (
    <button
    className="CreateTodoButton"
    onClick={
      (event) =>
        {
          console.log("Hiciste click")
          console.log(event)
          console.log(event.target)
        }
    }
    >
      <i className="fa-solid fa-plus"></i>
    </button>
  );
}

export { CreateTodoButton };
