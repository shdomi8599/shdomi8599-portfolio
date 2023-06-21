export type Skills = {
  type: string;
  name: string;
  value: number;
  class: string;
  content: string;
}[];

export type SkillSet = [string, Skills, () => void];
