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

//선택된 프로젝트 인덱스
export const pickState = atom({
  key: "pickState",
  default: 0,
});

//ArticleBox의 패딩 상태
export const paddingState = atom({
  key: "paddingState",
  default: 0,
});
