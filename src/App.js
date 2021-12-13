import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddTodo from './components/Addtodo';
import RemainingMessage from './components/RemainingMessage';
import SearchBar from './components/SearchBar';
import TodoList from './components/TodoList';

const initialTodoList = [
  { id: uuidv4(), title: 'Watching a movie', completed: false },
  { id: uuidv4(), title: 'Meeting a doctor', completed: false },
  { id: uuidv4(), title: 'Dinner with my family', completed: true },
];

function App() {
const [todoList, setTodoList] = useState (initialTodoList);

const createTodo = (title) => {
  const nextTodo = [{id: uuidv4(), title: title, completed: false }, ...todoList];
  setTodoList(nextTodo);
}

  return (
    <div className="container">
      <div className="mt-5 mx-auto mw-xs">
        <AddTodo createTodo={createTodo} />
        <SearchBar />
        <RemainingMessage />
        <TodoList todoList={todoList} />

      </div>
      
    </div>
  );
}

export default App;
