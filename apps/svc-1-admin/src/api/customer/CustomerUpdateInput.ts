import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CustomerUpdateInput = {
  users?: UserWhereUniqueInput | null;
};
