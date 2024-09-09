import { Injectable } from "@nestjs/common";
import { CustomerCreateInput } from "../customer/base/CustomerCreateInput";
import { Customer } from "../customer/base/Customer";
import { CmCdOne } from "./CmCdOne";
import { DeleteUserArgs } from "../user/base/DeleteUserArgs";

@Injectable()
export class custommoduleoneService {
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
