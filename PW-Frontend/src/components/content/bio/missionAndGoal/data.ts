export interface IGoalsMetaData {
  isDone: boolean;
  goalName: string;
}

export const GoalMetaData: IGoalsMetaData[] = [
  {
    isDone: false,
    goalName: "Explore about blockchain technology",
  },
  {
    isDone: true,
    goalName: "Build my own personal website",
  },
  {
    isDone: true,
    goalName: "Visit other country",
  },
];
