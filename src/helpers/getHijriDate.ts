import { toHijri } from "hijri-converter";

// Arabic day and month mappings
const ARABIC_DAYS = [
  "الأحد",
  "الإثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
  "السبت",
];
const ARABIC_MONTHS: { [key: number]: string } = {
  1: "محرم",
  2: "صفر",
  3: "ربيع الأول",
  4: "ربيع الثاني",
  5: "جمادى الأولى",
  6: "جمادى الآخرة",
  7: "رجب",
  8: "شعبان",
  9: "رمضان",
  10: "شوال",
  11: "ذو القعدة",
  12: "ذو الحجة",
};

export function getHijriDate() {
  const today = new Date();

  // 1. Get Gregorian date components
  const gYear = today.getFullYear();
  const gMonth = today.getMonth() + 1; // JS months are 0-indexed
  const gDay = today.getDate();

  // 2. Convert to Hijri
  const hijriDate = toHijri(gYear, gMonth, gDay);

  // 3. Calculate week of the month
  const weekNumber = Math.ceil(hijriDate.hd / 7);

  // 4. Get Arabic day name
  const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
  const arabicDay = ARABIC_DAYS[dayOfWeek];

  // 5. Get Arabic month name
  const arabicMonth = ARABIC_MONTHS[hijriDate.hm];

  // 6. Format the output
  return `${arabicDay} - الاسبوع #${weekNumber} من شهر ${arabicMonth}`;
}
