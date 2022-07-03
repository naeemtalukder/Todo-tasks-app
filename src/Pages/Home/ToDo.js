import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { faPen, faCircle, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import TodoWindo from './TodoWindo';
import Form from './Form';

const ToDo = () => {
    const [date, setDate] = useState(new Date());
    const [input, setInput]=('');
    const [todos, setTodos]=useState([]);
 
    return (
        <div class="hero min-h-screen bg-base-200 px-12">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className='card-body'>
                            <h1 class="text-3xl font-bold text-center">ToDo Tasks</h1>
                               <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos}></Form>
                            <div className='w-[100%] min-h-[35vh] border-[1px] flex flex-col'>
                               <TodoWindo todos={todos} setTodos={setTodos}/>
                            </div>
                        </div>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <DayPicker
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                            />
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ToDo;