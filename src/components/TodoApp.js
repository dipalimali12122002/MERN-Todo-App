import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, addTodo, deleteTodo, completeTodo } from '../actions/todoActions';

const TodoApp = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);

  const [newTodo, setNewTodo] = useState({ name: '', description: '' });

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAdd = () => {
    dispatch(addTodo(newTodo));
    setNewTodo({ name: '', description: '' });
  };

  const handleComplete = (todo) => {
    if (!todo.completed) {
      dispatch(completeTodo(todo._id, { ...todo, completed: true }));
    }
  };

  return (
    <div className="bg-gray-900 text-white p-5 max-w-lg mx-auto rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">My Todos</h1>
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Name" 
          value={newTodo.name} 
          onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })} 
          className="p-2 rounded-md bg-gray-700 w-full mb-2"
        />
        <input 
          type="text" 
          placeholder="Description" 
          value={newTodo.description} 
          onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })} 
          className="p-2 rounded-md bg-gray-700 w-full"
        />
        <button 
          onClick={handleAdd} 
          className="bg-blue-600 w-full mt-2 py-2 rounded-md hover:bg-blue-700">
          Add Todo
        </button>
      </div>

      <ul>
        {todos.map(todo => (
          <li key={todo._id} className="flex justify-between items-center p-2 bg-gray-800 mb-2 rounded-md">
            <span className={`${todo.completed ? 'line-through text-gray-400' : ''}`}>
              {todo.name} - {todo.description}
            </span>
            <div>
              {/* Show 'Complete' button only if the task is not completed */}
              {!todo.completed && (
                <button 
                  onClick={() => handleComplete(todo)}
                  className="bg-green-600 px-2 py-1 rounded-md mr-2 hover:bg-green-700">
                  Complete
                </button>
              )}
              <button 
                onClick={() => dispatch(deleteTodo(todo._id))}
                className="bg-red-600 px-2 py-1 rounded-md hover:bg-red-700">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
