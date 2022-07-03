import React from 'react';
import DeleteIcon from './DeleteIcon';
import Editor from './Editor';

const TodoWindo = ({todos,setTodos}) => {
    
    return (
         <div>
            {todos.map((todo)=>(
                <li key={todo.id}>
                    <input type="text"
                    value={todo.title}
                     />

                </li>
            ))}
         </div>
    );
};

export default TodoWindo;