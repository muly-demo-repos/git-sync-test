import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  myCustomer?: CustomerWhereUniqueInput;
  sessionId?: StringNullableFilter;
  username?: StringFilter;
};
