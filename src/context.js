import { createContext } from "react";

export const initialJobs = [
  { name: "Job 1", priority: "urgent" },
  { name: "Job 2", priority: "regular" },
  { name: "Job 3", priority: "trival" },
];

export const AppContext = createContext();
