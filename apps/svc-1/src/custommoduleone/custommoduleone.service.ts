import { Injectable } from "@nestjs/common";
import { CustomerCreateInput } from "../customer/base/CustomerCreateInput";
import { Customer } from "../customer/base/Customer";

@Injectable()
export class CustomModuleOneService {
  constructor() {}
  async CmCaOne(args: CustomerCreateInput): Promise<Customer> {
    throw new Error("Not implemented");
  }
}
