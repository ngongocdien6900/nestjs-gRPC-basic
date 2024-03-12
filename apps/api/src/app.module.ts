import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ClientsModule } from "@nestjs/microservices";
import { grpcOptions } from "proto/grpc-options";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "TODO_PACKAGE",
        ...grpcOptions,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
