import { Customer } from "../customer/Customer";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  myCustomer?: Customer | null;
  roles: JsonValue;
  sessionId: string | null;
  updatedAt: Date;
  username: string;
};
