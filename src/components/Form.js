import React , {useEffect} from 'react'
import {v4 as uuidv4 } from 'uuid';

const Form = ({input,todos,setInput,setTodos ,editTodo ,setEditTodo}) => {

    const handleInput  =(e) => {
        setInput(e.target.value)

    }

    const updateTodo  = (title , id ,completed ) => {
        const newTodo = todos.map( (todo) =>
            todo.id === id ? {id,title,completed} : todo 
        )

        setTodos(newTodo);
        setEditTodo('');

    }

    useEffect( () =>{
        if(editTodo) {
            setInput(editTodo.title);
        } else{
            setInput("");
        }
    },[setInput,editTodo])

    const hanldeFormSubmit = (e) => {
        e.preventDefault();
        if(!editTodo){ 
            setTodos([...todos,{id: uuidv4(), title:input , completed: false}])
            setInput('')

        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
        
    }   

   
    return (
        <form onSubmit={hanldeFormSubmit} > 

            <input type="text" value={input} onChange={handleInput} placeholder='Enter a Todo...' className='task-input' />
            <button  className="button-add" type="submit" >
                Add
            </button>

        </form>
    )
}

export default Form