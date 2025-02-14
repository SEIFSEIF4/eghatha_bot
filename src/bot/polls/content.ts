import { getHijriDate } from "@/helpers/getHijriDate";
import { PollType } from "@/types";

export interface PollContent {
  question: string;
  options: [{ text: string }, { text: string }, ...{ text: string }[]];
  duration: number;
  warning?: number; // ⬅️ New optional warning time before poll ends
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
        { text: "الاستغفار(70 مره على الاقل)" },
      ],
      duration: 2 * 60 * 1000, // 2 minutes
      warning: 1 * 60 * 1000, // ⬅️ 1 minute before poll ends
    }),
  },
  {
    type: "daily",
    timeZone: "Asia/Riyadh",
    content: () => ({
      question: `المتابعة اليومية:\n${getHijriDate()}`,
      options: [
        { text: "الصلاة 5 فرائض" },
        { text: "الأذكار بعد الصلاة المفروضة" },
        { text: "صلاة النوافل (6 ركات على الاقل)" },
        { text: "الصلاة على النبي" },
        { text: "أذكار الصباح و المساء" },
        { text: "ورد القران" },
        { text: "الضحى" },
        { text: "الاستغفار(70 مره على الاقل)" },
      ],
      duration: 24 * 3600 * 1000, // 24 hours
      warning: 1 * 3600 * 1000, // ⬅️ 1 hour before poll ends
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
      duration: 7 * 24 * 3600 * 1000, // 7 days
      warning: 3 * 3600 * 1000, // ⬅️ 3 hours before poll ends
    }),
  },
];
