import axios from "axios";
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

//나의 깃허브 데이터
export const gitDataState = atom<{ [key: string]: string }>({
  key: "gitDataState",
  default: {},
});
