import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickCreate = (msg) => {
    alert(msg)
  }

  return (
    <button className="CreateTodoButton"
    onClick={() => onClickCreate("Deseas agregar una nueva tarea?")}>+</button>
  );
}

export { CreateTodoButton };