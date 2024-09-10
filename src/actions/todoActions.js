import axios from 'axios';

export const fetchTodos = () => async dispatch => {
  const response = await axios.get('http://localhost:5000/todos');
  dispatch({ type: 'FETCH_TODOS', payload: response.data });
};

export const addTodo = (todo) => async dispatch => {
  const response = await axios.post('http://localhost:5000/todos', todo);
  dispatch({ type: 'ADD_TODO', payload: response.data });
};

export const deleteTodo = (id) => async dispatch => {
  await axios.delete(`http://localhost:5000/todos/${id}`);
  dispatch({ type: 'DELETE_TODO', payload: id });
};

export const completeTodo = (id, updatedTodo) => async dispatch => {
  const response = await axios.put(`http://localhost:5000/todos/${id}`, updatedTodo);
  dispatch({ type: 'COMPLETE_TODO', payload: response.data });
};
