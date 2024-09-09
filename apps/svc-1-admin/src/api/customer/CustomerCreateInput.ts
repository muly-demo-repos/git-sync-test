import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { UserCreateNestedManyWithoutCustomersInput } from "./UserCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  orders?: OrderWhereUniqueInput | null;
  users?: UserCreateNestedManyWithoutCustomersInput;
};
