import React from 'react';
import './TodoList.css'

//Con props le mandamos TodoItem
function TodoList(props){
    return(
        <section>
            <ul>
            {props.children}
            </ul>
        </section>
    );
}

export {TodoList};