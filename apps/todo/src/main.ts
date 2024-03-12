import { NestFactory } from "@nestjs/core";
import { TodoModule } from "./todo.module";
import { MicroserviceOptions } from "@nestjs/microservices";
import { grpcOptions } from "proto/grpc-options";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    TodoModule,
    grpcOptions,
  );

  await app.listen();
}
bootstrap();
