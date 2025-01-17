import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 1807;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

// Add more methods here
export const addTodo = (newTodo: Omit<Todo, 'id'>) => {
  return client.post<Todo>('/todos', newTodo);
};

export const deleteTodo = (todoId: number) => client.delete(`/todos/${todoId}`);

export const updateTodo = (todo: Todo) =>
  client.patch<Todo>(`/todos/${todo.id}`, todo);
