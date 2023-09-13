import { atom } from "recoil";

// 로그인 전역 상태
const log = atom({
  key: "log",
  default: false,
});

// 다크모드 전역 상태
const dark = atom({
  key: "dark",
  default: false,
});

export { log, dark };
