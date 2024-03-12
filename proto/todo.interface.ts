export interface PostTodoDTO {
  description: string;
  isDone: boolean;
}

export interface Todo {
  id: number;
  description: string;
  isDone: boolean;
}

export interface Todos {
  todoList: Todo[];
}

export interface GetTodo {}

export const TODO_SERVICE_NAME = "TodoService"