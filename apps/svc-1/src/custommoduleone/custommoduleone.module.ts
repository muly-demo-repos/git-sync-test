import { Module } from "@nestjs/common";
import { CustomModuleOneService } from "./custommoduleone.service";
import { CustomModuleOneController } from "./custommoduleone.controller";
import { CustomModuleOneResolver } from "./custommoduleone.resolver";

@Module({
  controllers: [CustomModuleOneController],
  providers: [CustomModuleOneService, CustomModuleOneResolver],
  exports: [CustomModuleOneService],
})
export class CustomModuleOneModule {}
