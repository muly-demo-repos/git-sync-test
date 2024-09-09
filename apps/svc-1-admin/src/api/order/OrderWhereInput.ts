import { StringFilter } from "../../util/StringFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  mycustomer?: CustomerWhereUniqueInput;
};
