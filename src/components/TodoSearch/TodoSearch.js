import "./TodoSearch.css";

function TodoSearch() {
  return (
    <input
      className="TodoSearch"
      id="todosearch"
      placeholder="Cortar cebolla"
      onChange={(event) => {
        console.log("Escribiste en el TodoSearch");
        console.log(event);
        console.log(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
