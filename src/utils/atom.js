import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "localStorage", //원하는 key 값 입력
  storage: localStorage,
});

export const darkState = atom({
  key: "darkMode",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const userState = atom({
  key: "userState",
  default: {
    id: "",
    name: "",
    session: "",
    token: "",
  },
  effects_UNSTABLE: [persistAtom],
});

export const isLoginState = atom({
  key: "isLoginState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
