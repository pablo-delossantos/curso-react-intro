import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h1 className='TodoCounter'>
      Has completado <span>{completed}</span> de <span>{total}</span> To Do's
    </h1>
  );
}

export { TodoCounter }; // Export nombrado
