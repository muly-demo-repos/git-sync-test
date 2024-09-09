import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CustomerWhereInput = {
  id?: StringFilter;
  orders?: OrderWhereUniqueInput;
  users?: UserListRelationFilter;
};
