import { atom } from "recoil";

// 로그인 전역 상태
const log = atom({
  key: "log",
  default: false,
});

export { log };
