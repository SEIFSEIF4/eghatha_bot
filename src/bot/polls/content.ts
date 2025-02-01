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
  content: () => PollContent; // Function to get fresh data
  duration?: number;
  timeZone?: string;
}[] = [
  {
    type: "custom",
    timeZone: "Asia/Riyadh",
    content: () => ({
      question: `المتابعة اليومية:\n${getHijriDate()}`,
      options: [
        { text: "الصلاة 5 فرائض" },
        { text: "صلاة النوافل (6 ركات على الاقل)" },
      ],
      duration: 2 * 60 * 1000,
    }),
  },
  {
    type: "daily",
    timeZone: "Asia/Riyadh",
    content: () => ({
      question: `المتابعة اليومية:\n${getHijriDate()}`,
      options: [
        { text: "الصلاة 5 فرائض" },
        { text: "صلاة النوافل (6 ركات على الاقل)" },
        { text: "الصلاة على النبي" },
        { text: "أذكار الصباح و المساء" },
        { text: "ورد القران" },
        { text: "الضحى" },
      ],
      duration: 24 * 3600 * 1000,
    }),
  },
  {
    type: "weekly",
    timeZone: "Asia/Riyadh",
    content: () => ({
      question: `المتابعة الأسبوعية:\n${getHijriDate()}`,
      options: [
        { text: "صيام اثنين وخميس" },
        { text: "و سنن الجمعة الكهف" },
        { text: "صلة الرحم" },
        { text: "(حزئين على الاقل) ورد القران" },
        { text: "الصدقة" },
      ],
      duration: 7 * 24 * 3600 * 1000,
    }),
  },
];
