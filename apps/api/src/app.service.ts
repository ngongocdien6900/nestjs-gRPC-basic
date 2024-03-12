import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import {
  PostTodoDTO,
  Todo,
  GetTodo,
  Todos,
  TODO_SERVICE_NAME,
} from "proto/todo.interface";

interface TodoService {
  postTodo(body: PostTodoDTO): Todo;
  getTodoList(query: GetTodo): Todos;
}

@Injectable()
export class AppService implements OnModuleInit {
  private todoService: TodoService;

  constructor(@Inject("TODO_PACKAGE") private client: ClientGrpc) {}

  onModuleInit() {
    this.todoService = this.client.getService<TodoService>(TODO_SERVICE_NAME);
  }

  postTodo(body: PostTodoDTO) {
    return this.todoService.postTodo(body);
  }

  getTodoList() {
    return this.todoService.getTodoList({});
  }
}
