import React from 'react';
import './TodoItem.css'

function TodoItem(props){
  // const onComplete = () => {
  //   alert("Completaste tu tarea " + props.text)
  // }

  const onDelete = () => {
    alert("Eliminaste tu tarea " + props.text)
  }


    return(
        <li className='TodoItem'>
            <span className={`Icon Icon-check ${props.compcompleteleted && 'Icon-check--active'}`}
            onClick={props.onComplete}>
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
      onClick={props.onDelete}>
        X
      </span>
        </li>
    );
}

export {TodoItem};