import * as graphql from "@nestjs/graphql";
import { CustomerCreateInput } from "../customer/base/CustomerCreateInput";
import { Customer } from "../customer/base/Customer";
import { CmCdOne } from "../customModuleOne/CmCdOne";
import { DeleteUserArgs } from "../user/base/DeleteUserArgs";
import { CustomModuleOneService } from "./custommoduleone.service";

export class CustomModuleOneResolver {
  constructor(protected readonly service: CustomModuleOneService) {}

  @graphql.Query(() => Customer)
  async CmCaOne(
    @graphql.Args()
    args: CustomerCreateInput
  ): Promise<Customer> {
    return this.service.CmCaOne(args);
  }

  @graphql.Query(() => String)
  async CmCaSplit(
    @graphql.Args()
    args: CmCdOne
  ): Promise<string> {
    return this.service.CmCaSplit(args);
  }

  @graphql.Query(() => DeleteUserArgs)
  async CmCaTwo(
    @graphql.Args("args")
    args: string
  ): Promise<DeleteUserArgs> {
    return this.service.CmCaTwo(args);
  }
}
