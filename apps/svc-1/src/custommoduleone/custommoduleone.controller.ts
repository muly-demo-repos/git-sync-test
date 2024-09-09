import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CustomModuleOneService } from "./custommoduleone.service";
import { CustomerCreateInput } from "../customer/base/CustomerCreateInput";
import { Customer } from "../customer/base/Customer";
import { DeleteUserArgs } from "../user/base/DeleteUserArgs";

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

  @common.Get("/:id/cm-ca-split")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CmCaSplit(
    @common.Param()
    params: number,
    @common.Query()
    query: CustomerCreateInput,
    @common.Body()
    body: string
  ): Promise<string> {
        const args = {
  prop2: params,
  prop3: query,
  prop1: body,
  };
  return this.service.CmCaSplit(args);
      }

  @common.Get("/:id/cm-ca-two")
  @swagger.ApiOkResponse({
    type: DeleteUserArgs
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CmCaTwo(
    @common.Body()
    body: string
  ): Promise<DeleteUserArgs> {
        return this.service.CmCaTwo(body);
      }
}
