import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  myCustomer?: CustomerWhereUniqueInput | null;
  password?: string;
  roles?: InputJsonValue;
  sessionId?: string | null;
  username?: string;
};
