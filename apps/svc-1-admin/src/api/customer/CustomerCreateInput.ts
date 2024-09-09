import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CustomerCreateInput = {
  users?: UserWhereUniqueInput | null;
};
