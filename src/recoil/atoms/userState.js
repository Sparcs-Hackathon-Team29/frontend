import { atom } from "recoil";

export const UserState = atom({
  key: "userKey", //전역적으로 유일해야함
  default: "name",
});
