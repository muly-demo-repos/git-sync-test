import { Injectable } from "@nestjs/common";
import { CustomerCreateInput } from "../customer/base/CustomerCreateInput";
import { Customer } from "../customer/base/Customer";
import { CmCdOne } from "../customModuleOne/CmCdOne";
import { DeleteUserArgs } from "../user/base/DeleteUserArgs";

@Injectable()
export class CustomModuleOneService {
  constructor() {}
  async CmCaOne(args: CustomerCreateInput): Promise<Customer> {
    throw new Error("Not implemented");
  }
  async CmCaSplit(args: CmCdOne): Promise<string> {
    throw new Error("Not implemented");
  }
  async CmCaTwo(args: string): Promise<DeleteUserArgs> {
    throw new Error("Not implemented");
  }
}
