import { getHijriDate } from "@/helpers/getHijriDate";

export type PollType = "daily" | "weekly" | "custom";

export interface PollContent {
  question: string;
  // Enforce minimum 2 text options required for telegram poll
  options: [{ text: string }, { text: string }, ...{ text: string }[]];
  duration: number;
}

export const pollConfigurations: {
  type: PollType;
  content: PollContent;
  duration?: number;
}[] = [
  // {
  //   type: "custom",
  //   content: {
  //     question: `المتابعة اليومية:\n${getHijriDate()}`,
  //     options: [
  //       { text: "الصلاة 5 فرائض" },
  //       { text: "صلاة النوافل (6 ركات على الاقل)" },
  //     ],
  //     duration: 2 * 60 * 1000,
  //   },
  // },
  {
    type: "daily",
    content: {
      question: `المتابعة اليومية:\n${getHijriDate()}`,
      options: [
        { text: "الصلاة 5 فرائض" },
        { text: "صلاة النوافل (6 ركات على الاقل)" },
        { text: "الصلاة على النبي" },
        { text: "أذكار الصباح و المساء" },
        { text: "ورد القران" },
        { text: "الضحى" },
      ],
      duration: 24 * 3600 * 1000, // will expire after 1 day
    },
  },
  {
    type: "weekly",
    content: {
      question: `المتابعة الأسبوعية:\n${getHijriDate()}`,
      options: [
        { text: "الصلاة 5 فرائض" },
        { text: "صلاة النوافل (6 ركات على الاقل)" },
        { text: "الصلاة على النبي" },
        { text: "أذكار الصباح و المساء" },
        { text: "ورد القران" },
        { text: "الضحى" },
      ],
      duration: 7 * 24 * 3600 * 1000, // ill expire after 1 week
    },
  },
];
