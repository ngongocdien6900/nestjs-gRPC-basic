import { Injectable } from "@nestjs/common";
import { Todo, PostTodoDTO, Todos } from "proto/todo.interface";

@Injectable()
export class TodoService {
  private todoList: Todo[] = [];

  public postTodo(body: PostTodoDTO): Todo {
    const newTodo: Todo = {
      ...body,
      id: this.todoList.length + 1,
    };
    this.todoList.push(newTodo);

    return newTodo;
  }

  public getTodoList(): Todos {
    return {
      todoList: this.todoList,
    };
  }
}
