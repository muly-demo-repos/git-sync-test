import { Customer } from "../customer/Customer";

export type Order = {
  createdAt: Date;
  id: string;
  mycustomer?: Customer | null;
  updatedAt: Date;
};
