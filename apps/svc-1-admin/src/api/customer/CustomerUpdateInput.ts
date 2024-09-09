import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { UserUpdateManyWithoutCustomersInput } from "./UserUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  orders?: OrderWhereUniqueInput | null;
  users?: UserUpdateManyWithoutCustomersInput;
};
