import { Module } from "@nestjs/common";
import { custommoduleoneService } from "./custommoduleone.service";
import { custommoduleoneController } from "./custommoduleone.controller";
import { custommoduleoneResolver } from "./custommoduleone.resolver";

@Module({
  controllers: [custommoduleoneController],
  providers: [custommoduleoneService, custommoduleoneResolver],
  exports: [custommoduleoneService],
})
export class custommoduleoneModule {}
