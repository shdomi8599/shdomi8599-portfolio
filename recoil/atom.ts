import { atom } from "recoil";

//선택된 네비 상태
export const selectNavState = atom({
  key: "selectNavState",
  default: "",
});

//네비바의 높이, 반응형으로 변하기 때문에 높이를 상태 관리
export const navHeightState = atom({
  key: "navHeightState",
  default: 0,
});
