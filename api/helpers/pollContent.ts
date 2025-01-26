import { getHijriDate } from "./getHijriDate";

export const HijriDate: string = getHijriDate();

export const pollConfigurations = [
  {
    type: "custom",
    schedule: "0/2 * * * *",
    duration: 1 * 60 * 1000, // 1 minutes
    timeZone: "Europe/Istanbul",
    content: {
      question: `اختبار:\n${HijriDate}`,
      options: [
        { text: "الصلاة 5 فرائض" },
        { text: "صلاة النوافل (6 ركات على الاقل)" },
        { text: "الصلاة على النبي" },
        { text: "أذكار الصباح و المساء" },
        { text: "ورد القران" },
        { text: "الضحى" },
      ],
    },
  },
  {
    type: "daily",
    schedule: "0 21 * * *", // Every day at 9 PM
    duration: 24 * 60 * 60 * 100, // 1 day
    timeZone: "Europe/Istanbul",
    content: {
      question: `المتابعة اليومية:\n${HijriDate}`,
      options: [
        { text: "الصلاة 5 فرائض" },
        { text: "صلاة النوافل (6 ركات على الاقل)" },
        { text: "الصلاة على النبي" },
        { text: "أذكار الصباح و المساء" },
        { text: "ورد القران" },
        { text: "الضحى" },
      ],
    },
  },
  {
    type: "weekly",
    schedule: "0 21 * * 5", // Every Friday at 9 PM
    duration: 7 * 24 * 60 * 60 * 100, // 7 days
    timeZone: "Europe/Istanbul",
    content: {
      question: `المتابعة الأسبوعية:\n${HijriDate}`,
      options: [
        { text: "صيام اثنين وخميس" },
        { text: "و سنن الجمعة الكهف" },
        { text: "صلة الرحم" },
        { text: "(ربع على الاقل) ورد القران" },
        { text: "الصدقة" },
      ],
    },
  },
];
