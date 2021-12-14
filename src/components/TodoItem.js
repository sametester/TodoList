import { useState } from 'react';
import EditTodo from './EditTodo';

function TodoItem(props) {
    const [isEdit, setIsEdit] = useState(false);



    const handleClickDelete =() => {
        props.deleteTodo(props.todoItem.id)
    };

    const handleClickToggle = () => {
        props.updateTodo(props.todoItem.id, { completed: !props.todoItem.completed });
    };


    return (
        <li 
        className={`list-group-item d-flex justify-content-between align-items-center py-3 bd-callout bd-callout-${
            props.todoItem.completed ? 'success' : 'warning'}`}
        >
            { isEdit ? (
            <EditTodo 
            closeEditForm={() => setIsEdit(false)} 
            todoItem={props.todoItem} 
            updateTodo={props.updateTodo}
            /> 
            ) : (
            <>
            <span onClick={() => setIsEdit(true)}>{ props.todoItem.title }</span>
            <div className="btn-group">
                <button className="btn btn-info rounded-0" onClick={handleClickToggle}>
                    <i className={`fas fa-toggle-${props.todoItem.completed ? 'on' : 'off'}`} />
                </button>
                <button className="btn btn-danger rounded-0" onClick={handleClickDelete}>
                    <i className="fas fa-trash-alt" />
                </button>
            </div>
            </>
            )
            }
        </li>
    )
    
}
export default TodoItem;