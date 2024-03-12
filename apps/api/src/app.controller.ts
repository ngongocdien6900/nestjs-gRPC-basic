import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { PostTodoDTO } from "proto/todo.interface";

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Post()
  public postTodo(@Body() body: PostTodoDTO) {
    return this.appService.postTodo(body);
  }

  @Get()
  public getTodoList() {
    return this.appService.getTodoList();
  }
}
