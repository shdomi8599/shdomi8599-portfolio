export interface Project {
  name: string;
  href?: string|string[];
  content?: string;
  projectIdx?: number;
}

export type ProjectList = [JSX.Element, Project[], string[]];
