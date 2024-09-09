import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type OrderUpdateInput = {
  mycustomer?: CustomerWhereUniqueInput | null;
};
