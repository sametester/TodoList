import EditTodo from './EditTodo';


function TodoItem(props) {
    console.log(props.todoItem);

    return (
        <li 
        className={`list-group-item d-flex justify-content-between align-items-center py-3 bd-callout bd-callout-${props.todoItem.completed ? 'success' : 'warning'}`}
        >
            {/* <EditTodo /> */}

            <span>{ props.todoItem.title }</span>
            <div className="btn-group">
                <button className="btn btn-info rounded-0">
                    <i className={`fas fa-toggle-${props.todoItem.completed ? 'on' : 'off'}`} />
                </button>
                <button className="btn btn-danger rounded-0">
                    <i className="fas fa-trash-alt" />
                </button>
            </div>
        </li>
    )
}
export default TodoItem;