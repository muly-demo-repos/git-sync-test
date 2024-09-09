import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type OrderCreateInput = {
  mycustomer?: CustomerWhereUniqueInput | null;
};
