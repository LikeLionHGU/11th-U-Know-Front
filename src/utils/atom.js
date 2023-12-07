import { atom } from "recoil";
// import { recoilPersist } from "recoil-persist";

// const { persistAtom } = recoilPersist({
//   key: "localStorage", //원하는 key 값 입력
//   storage: localStorage,
// });

export const darkState = atom({
  key: "darkMode",
  default: false,
  // effects_UNSTABLE: [persistAtom],
});

export const userState = atom({
  key: "userState",
  default: {
    id: "21800446",
    name: "오인혁",
    session: "",
    token: "",
  },
});

export const isLoginState = atom({
  key: "isLoginState",
  default: false,
  // effects_UNSTABLE: [persistAtom],
});

export const lectureUnTaken = atom({
  key: "lectureUnTaken",
  default: [],
});

export const lectureTaken = atom({
  key: "lectureTaken",
  default: [],
});

export const sidebarTitle = atom({
  key: "sidebarTitle",
  default: "영역별 수강 현황",
});

export const LikeMajors = atom({
  key: "LikeMajors",
  default: [],
});

export const LikeLiberalArts = atom({
  key: "LikeLiberalArts",
  default: [],
});
export const clickedEnum = atom({
  key: "clickedEnum",
  default: "",
});
