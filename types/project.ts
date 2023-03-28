export interface Project {
  name: string;
  href?: string[];
  content?: string;
}

export type ProjectList = [JSX.Element, Project[]];
