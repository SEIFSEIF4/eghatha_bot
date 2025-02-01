import { toHijri } from "hijri-converter";

export function getHijriDate(): string {
  // Get current date in Riyadh timezone, ensuring Gregorian calendar
  const now = new Date();
  const options = {
    timeZone: "Asia/Riyadh",
    year: "numeric" as "numeric",
    month: "numeric" as "numeric",
    day: "numeric" as "numeric",
    weekday: "long" as "long",
  };

  // Force Gregorian calendar extraction
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const formattedDate = formatter.formatToParts(now);

  console.log("Formatted Parts (Gregorian):", formattedDate);

  const dayOfWeek = formattedDate.find((p) => p.type === "weekday")?.value;
  const day = formattedDate.find((p) => p.type === "day")?.value;
  const month = formattedDate.find((p) => p.type === "month")?.value;
  const year = formattedDate.find((p) => p.type === "year")?.value;

  console.log("Extracted Gregorian Date:", { dayOfWeek, day, month, year });

  if (!dayOfWeek || !day || !month || !year) {
    console.error("Error extracting date parts");
    return "التاريخ الهجري غير متوفر";
  }

  const gregorianDay = parseInt(day, 10);
  const gregorianMonth = parseInt(month, 10);
  const gregorianYear = parseInt(year, 10);

  // Convert to Hijri
  const hijriDate = toHijri(gregorianYear, gregorianMonth, gregorianDay);
  console.log("Hijri Conversion Output:", hijriDate);

  if (!hijriDate || isNaN(hijriDate.hd) || isNaN(hijriDate.hm)) {
    console.error("Invalid Hijri conversion");
    return "التاريخ الهجري غير متوفر";
  }

  // Week calculation
  const weekNumber = Math.ceil(hijriDate.hd / 7);

  // Hijri Month Names
  const hijriMonthNames = [
    "محرم",
    "صفر",
    "ربيع الأول",
    "ربيع الآخر",
    "جمادى الأولى",
    "جمادى الآخرة",
    "رجب",
    "شعبان",
    "رمضان",
    "شوال",
    "ذو القعدة",
    "ذو الحجة",
  ];

  const hijriMonthName = hijriMonthNames[hijriDate.hm - 1] || "غير معروف";

  // Map English weekday to Arabic
  const dayOfWeekMap: { [key: string]: string } = {
    Sunday: "الأحد",
    Monday: "الاثنين",
    Tuesday: "الثلاثاء",
    Wednesday: "الأربعاء",
    Thursday: "الخميس",
    Friday: "الجمعة",
    Saturday: "السبت",
  };

  const arabicDayOfWeek = dayOfWeekMap[dayOfWeek] || "غير معروف";

  return `${arabicDayOfWeek} - الأسبوع #${weekNumber} من شهر ${hijriMonthName}`;
}
