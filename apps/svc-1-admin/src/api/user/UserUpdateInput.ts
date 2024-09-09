import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  sessionId?: string | null;
  username?: string;
};
