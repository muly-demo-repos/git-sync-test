import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CustomerWhereInput = {
  id?: StringFilter;
  users?: UserWhereUniqueInput;
};
