import React from 'react';
import uniqid from 'uniqid';

const Form = ({input,setInput,todos,setTodos}) => {
    const onFormSubmit =e=>{
        setInput(e.target.value);
    }
    const addTodo = e=>{
        e.preventDefault();
        setTodos([...todos, {id:uniqid(), title:input, completed:false}]);
        setInput('');
      };
    return (
        <div>
            <form onSubmit={addTodo} className='flex space-y-2'>
                <input 
                className='bg-base-300 outline-none text-[1.3em] rounded-[5xl] flex-grow' 
                placeholder='Enter a Todo' 
                type="text" 
                value={input}
                required
                onChange={onFormSubmit} />
                <button className='text-2xl text-gray-900 px-2 rounded-[5xl] active:text-gray-600'>Add</button>
            </form>
        </div>
    );
};

export default Form;