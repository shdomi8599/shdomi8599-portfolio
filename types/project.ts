//임시 타입들, 데이터를 다 넣고나서 ?를 제거해줘야함
export interface Project {
  name?: string;
  href?: string;
  content?: string;
}

export type ProjectItem = Project;

export type ProjectList = [JSX.Element, ProjectItem[]];
