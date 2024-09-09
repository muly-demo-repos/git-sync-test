import { User } from "../user/User";

export type Customer = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  users?: User | null;
};
