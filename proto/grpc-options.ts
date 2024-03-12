import { ClientOptions, Transport } from "@nestjs/microservices";
import { join } from "path";

export const grpcOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: "todo", // ['todo', 'todo1']
    protoPath: join(__dirname, "../todo.proto"), // ['./hero/hero.proto', './hero/hero2.proto']
  },
};
