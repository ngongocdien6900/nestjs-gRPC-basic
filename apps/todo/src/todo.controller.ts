import { Controller } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { GrpcMethod } from "@nestjs/microservices";
import { Todo, PostTodoDTO, GetTodo, Todos } from "proto/todo.interface";

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @GrpcMethod("TodoService")
  public postTodo(body: PostTodoDTO): Todo {
    return this.todoService.postTodo(body);
  }

  /**
   * We don't need to define the method,
   * just defining the func name matches with the method
   */
  @GrpcMethod("TodoService")
  public getTodoList(query: GetTodo): Todos {
    console.log(query);
    return this.todoService.getTodoList();
  }
}
