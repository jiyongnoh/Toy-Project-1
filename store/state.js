import { atom } from "recoil";

const log = atom({
  key: "log",
  default: false,
});

export { log };
