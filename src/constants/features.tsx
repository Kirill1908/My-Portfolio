import { Code, Lightbulb, Users, Coffee } from "lucide-react";

export const FEATURES = [
  {
    key: "cleanCode",
    icon: Code,
  },
  {
    key: "innovation",
    icon: Lightbulb,
  },
  {
    key: "collaboration",
    icon: Users,
  },
  {
    key: "dedication",
    icon: Coffee,
  },
] as const;

export const TRAITS_KEYS = [
  "problemSolver",
  "teamPlayer",
  "quickLearner",
  "detailOriented",
] as const;
