RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
import { atom, RecoilEnv } from "recoil";

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

//project 컨텐츠의 높이
export const projectHeightState = atom({
  key: "projectHeightState",
  default: 0,
});

//Projects 섹션 display 상태
export const projectDisplayState = atom({
  key: "projectDisplayState",
  default: false,
});
