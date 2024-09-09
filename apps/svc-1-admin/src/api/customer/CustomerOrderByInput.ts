import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  ordersId?: SortOrder;
  updatedAt?: SortOrder;
};
