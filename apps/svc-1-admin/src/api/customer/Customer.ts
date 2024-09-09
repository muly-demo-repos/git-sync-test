import { Order } from "../order/Order";
import { User } from "../user/User";

export type Customer = {
  createdAt: Date;
  id: string;
  orders?: Order | null;
  updatedAt: Date;
  users?: Array<User>;
};
