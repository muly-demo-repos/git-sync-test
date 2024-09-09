import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CustomModuleOneService } from "./custommoduleone.service";
import { CustomerCreateInput } from "../customer/base/CustomerCreateInput";
import { Customer } from "../customer/base/Customer";

@swagger.ApiTags("customModuleOnes")
@common.Controller("customModuleOnes")
export class CustomModuleOneController {
  constructor(protected readonly service: CustomModuleOneService) {}

  @common.Get("/:id/cm-ca-one")
  @swagger.ApiOkResponse({
    type: Customer
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CmCaOne(
    @common.Body()
    body: CustomerCreateInput
  ): Promise<Customer> {
        return this.service.CmCaOne(body);
      }
}
